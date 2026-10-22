import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import net from "node:net";
import { spawn, spawnSync } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";
import { canonicalPaths, canonicalPathAliases, getCanonicalUrl, normalizePath } from "../src/utils/canonical.js";
import { readContentSnapshot } from "./seo-content.mjs";

const nginx = process.env.NGINX_BINARY || "nginx";
const temp = await fs.mkdtemp(path.join(os.tmpdir(), "manovaidya-nginx-test-"));
const nginxPath = (value) => value.replace(/\\/g, "/");
const freePort = () => new Promise((resolve, reject) => {
  const server = net.createServer();
  server.on("error", reject);
  server.listen(0, "127.0.0.1", () => {
    const port = server.address().port;
    server.close(() => resolve(port));
  });
});
const ports = [await freePort(), await freePort(), await freePort()];
const localOrigin = `http://127.0.0.1:${ports[2]}`;
const sitemap = await fs.readFile("dist/sitemap.xml", "utf8");
const content = await readContentSnapshot();
const routes = new Set([
  ...canonicalPaths,
  ...Object.keys(canonicalPathAliases),
  ...[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) => new URL(url).pathname),
  ...content.blogs.map((blog) => `/blog/${blog.slug}`),
  ...content.caseStudies.map((study) => `/case-studies/${study.slug}`),
]);
let listenIndex = 0;
// Exercise the production map, returns and try_files with HTTP on local ports.
const site = (await fs.readFile("deploy/manovaidya.nginx.conf", "utf8"))
  .replace("/var/www/manovaidya/frontend/deploy/canonical-redirects.map", nginxPath(path.resolve("deploy/canonical-redirects.map")))
  .replace(/    listen \[::\]:[^;]+;\n/g, "")
  .replace(/    listen [^;]+;/g, () => `    listen 127.0.0.1:${ports[listenIndex++]};`)
  .replace(/    ssl_certificate(?:_key)? [^;]+;\n/g, "")
  .replace("/var/www/manovaidya/frontend/dist", nginxPath(path.resolve("dist")))
  .replaceAll('https://manovaidya.org', localOrigin);
await fs.mkdir(path.join(temp, "logs"));
await fs.mkdir(path.join(temp, "temp"));
await fs.writeFile(path.join(temp, "nginx.conf"), `worker_processes 1;\nevents { worker_connections 128; }\nhttp {\n${site}\n}\n`);
const args = ["-p", `${nginxPath(temp)}/`, "-c", "nginx.conf"];
const syntax = spawnSync(nginx, [...args, "-t"], { encoding: "utf8", windowsHide: true });
if (syntax.error || syntax.status !== 0) throw new Error(syntax.error?.message || syntax.stderr);
console.log(syntax.stderr.trim());
const nginxProcess = spawn(nginx, args, { windowsHide: true, stdio: "ignore" });
let requests = 0;
const failures = [];
const tested = new Set();
try {
  for (let attempt = 0; attempt < 40; attempt++) {
    try { await fetch(`http://127.0.0.1:${ports[2]}/robots.txt`); break; }
    catch { await delay(50); }
  }
  for (const route of routes) {
    const base = normalizePath(route);
    const canonical = new URL(getCanonicalUrl(route)).pathname;
    const variants = base === "/" ? ["/", "/index.html"] : [base, `${base}/`, `${base}.html`, `${base}/index.html`];
    for (const variant of variants) {
      for (const port of ports) {
        const query = "?utm_source=seo-check&x=1";
        const response = await fetch(`http://127.0.0.1:${port}${variant}${query}`, { method: "HEAD", redirect: "manual" });
        requests++;
        tested.add(`${port} ${variant}`);
        const expectedStatus = port === ports[2] && variant === canonical ? 200 : 301;
        const location = response.headers.get("location");
        if (response.status !== expectedStatus || (expectedStatus === 301 && location !== `${localOrigin}${canonical}${query}`)) {
          failures.push(`${port} ${variant}: ${response.status} ${location || ""}`);
        }
      }
    }
  }
  const map = await fs.readFile("deploy/canonical-redirects.map", "utf8");
  for (const [, from, to] of map.matchAll(/^\s+(\/\S+)\s+(\/\S+);$/gm)) {
    for (const port of ports) {
      if (tested.has(`${port} ${from}`)) continue;
      const response = await fetch(`http://127.0.0.1:${port}${from}?utm_source=legacy-check`, { method: "HEAD", redirect: "manual" });
      requests++;
      if (response.status !== 301 || response.headers.get("location") !== `${localOrigin}${to}?utm_source=legacy-check`) failures.push(`Legacy ${from}: incorrect redirect`);
    }
  }
  const asset = (await fs.readdir('dist/assets')).find((file) => file.endsWith('.js'));
  for (const [route, expected] of [["/robots.txt", 200], ["/sitemap.xml", 200], [`/assets/${asset}`, 200], ["/does-not-exist/", 404], ["/blog/missing-regression-slug/", 404], ["/case-studies/missing-regression-slug/", 404], ["/assets/missing.js", 404]]) {
    const response = await fetch(`http://127.0.0.1:${ports[2]}${route}`, { redirect: "manual" });
    requests++;
    if (response.status !== expected) failures.push(`${route}: expected ${expected}, got ${response.status}`);
    if (expected === 404 && !route.startsWith('/assets/')) {
      const html = await response.text();
      if (!html.includes('Page Not Found') || !html.includes('does not exist or has been moved')) failures.push(`${route}: missing custom server-rendered 404 body`);
    } else await response.body?.cancel();
  }
  const curl = process.platform === 'win32' ? 'curl.exe' : 'curl';
  for (const route of ['/index.html', '/blog', `/blog/${content.blogs[0].slug}`, '/case-studies', '/dr-ankush-garg']) {
    const head = spawnSync(curl, ['-sS', '-I', '--max-time', '15', `${localOrigin}${route}`], { encoding: 'utf8', windowsHide: true });
    const follow = spawnSync(curl, ['-sS', '-I', '-L', '--max-time', '15', '-o', process.platform === 'win32' ? 'NUL' : '/dev/null', '-w', '%{http_code} %{num_redirects} %{url_effective}', `${localOrigin}${route}`], { encoding: 'utf8', windowsHide: true });
    const expected = `${localOrigin}${route === '/index.html' ? '/' : new URL(getCanonicalUrl(route)).pathname}`;
    if (head.status !== 0 || !/HTTP\/1\.1 301/.test(head.stdout) || follow.status !== 0 || follow.stdout !== `200 1 ${expected}`) failures.push(`curl ${route}: ${head.stderr} ${follow.stdout} ${follow.stderr}`);
    console.log(`curl -I / -IL ${route}: ${follow.stdout}`);
  }
} finally {
  spawnSync(nginx, [...args, "-s", "quit"], { windowsHide: true });
  await new Promise((resolve) => nginxProcess.exitCode !== null ? resolve() : nginxProcess.once("exit", resolve));
}
if (failures.length) throw new Error(failures.slice(0, 20).join("\n"));
console.log(`Passed ${requests} real Nginx responses: canonical 200s, one-hop redirects, aliases, HTML variants, queries, and 404s.`);
