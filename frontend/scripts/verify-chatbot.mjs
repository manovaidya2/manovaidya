import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import http from 'node:http';
import { chromium } from 'playwright';

const root = path.resolve('dist');
const server = http.createServer(async (req, res) => {
  try {
    const pathname = new URL(req.url, 'http://localhost').pathname;
    const file = path.resolve(root, `.${decodeURIComponent(pathname)}`, pathname.endsWith('/') ? 'index.html' : '');
    if (!file.startsWith(`${root}${path.sep}`)) throw new Error('Invalid path');
    const body = await fs.readFile(file);
    res.setHeader('Content-Type', file.endsWith('.js') ? 'application/javascript' : file.endsWith('.css') ? 'text/css' : file.endsWith('.html') ? 'text/html' : 'application/octet-stream');
    res.end(body);
  } catch { res.writeHead(404); res.end('Not found'); }
});
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
let browser; let checks = 0;
try {
  browser = await chromium.launch();
  for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844 }]) {
    const context = await browser.newContext({ viewport }); const page = await context.newPage(); const errors = []; const requests = [];
    page.on('pageerror', (error) => errors.push(error.message));
    let retryCount = 0; let pending; let sessionPayload;
    await context.route('**/api/**', async (route) => {
      const req = route.request(); const endpoint = new URL(req.url()).pathname; const payload = req.postDataJSON();
      const reply = (data, status = 200) => route.fulfill({ status, contentType: 'application/json', body: JSON.stringify({ success: status === 200, data }) });
      if (endpoint === '/api/ai-chat') {
        requests.push(payload); assert.equal(payload.context, undefined, 'Knowledge must be retrieved on the server');
        if (payload.question === 'Wait for the old reply') { pending = () => reply({ answer: 'OLD SESSION REPLY', conversationId: payload.conversationId }); return; }
        if (payload.question === 'Retry this question' && retryCount++ === 0) return reply({}, 503);
        const action = payload.question === 'Book consultation' ? 'BOOK_CONSULTATION' : payload.question === 'Connect with agent' ? 'CONNECT_AGENT' : 'NONE';
        return reply({ answer: payload.question === 'What is ADHD?' ? 'ADHD can affect attention and activity regulation.' : payload.question === 'tell me more' ? 'An assessment considers how attention affects daily life.' : 'The retry worked.', conversationId: payload.conversationId, action, state: { patients: [] }, sources: action === 'NONE' ? [{ url: 'https://manovaidya.org/child-health-care/adhd-child/', title: 'ADHD support', section: 'Assessment' }] : [] });
      }
      if (endpoint === '/api/ai-chat/availability') return reply({ available: true });
      if (endpoint === '/api/consultations') { sessionPayload = payload; return reply({ _id: 'fixture-consultation' }); }
      if (endpoint === '/api/live-chat/sessions') { sessionPayload = payload; return reply({ sessionKey: 'fixture-agent', messages: [] }); }
      if (endpoint === '/api/live-chat/sessions/fixture-agent/messages') return reply({ sessionKey: 'fixture-agent', messages: [{ _id: 'm1', sender: 'visitor', text: payload.text }] });
      if (endpoint === '/api/live-chat/sessions/fixture-agent') return reply({ sessionKey: 'fixture-agent', messages: [] });
      return reply({});
    });
    await page.goto(`http://127.0.0.1:${server.address().port}/`, { waitUntil: 'domcontentloaded' });
    await page.getByRole('button', { name: 'Open Mano Mitra chat assistant', exact: true }).click();
    const chat = page.locator('section').filter({ has: page.getByRole('button', { name: 'Reset AI chat' }) });
    const send = async (text) => { await chat.locator('textarea').fill(text); await chat.getByRole('button', { name: 'Send question' }).click(); };
    await send('What is ADHD?'); await chat.getByText('ADHD can affect attention and activity regulation.', { exact: true }).waitFor();
    assert.equal(await chat.getByRole('link', { name: 'Source: ADHD support' }).count(), 1);
    await send('tell me more'); await chat.getByText('An assessment considers how attention affects daily life.', { exact: true }).waitFor();
    assert.equal(requests[0].conversationId, requests[1].conversationId); checks += 3;
    await send('Retry this question'); await chat.getByRole('button', { name: 'Retry', exact: true }).click();
    await chat.getByText('The retry worked.', { exact: true }).waitFor();
    assert.equal(await chat.getByText('Retry this question', { exact: true }).count(), 1); checks++;
    await send('Wait for the old reply'); await page.waitForFunction(() => document.querySelectorAll('textarea').length > 0);
    while (!pending) await new Promise((resolve) => setTimeout(resolve, 20));
    const oldId = requests.at(-1).conversationId;
    await chat.getByRole('button', { name: 'Reset AI chat' }).click(); await pending();
    await send('New session'); await chat.getByText('The retry worked.', { exact: true }).waitFor();
    assert.notEqual(requests.at(-1).conversationId, oldId);
    assert.equal(await chat.getByText('OLD SESSION REPLY', { exact: true }).count(), 0); checks++;
    await chat.getByRole('button', { name: 'Reset AI chat' }).click();
    await chat.getByRole('button', { name: 'Book consultation', exact: true }).click();
    await chat.getByText('Please share your full name.', { exact: true }).waitFor();
    await send('Test Visitor'); await chat.getByText('Please share your mobile number.', { exact: true }).waitFor();
    await send('9876543210'); await chat.getByText('Please share your city or location.', { exact: true }).waitFor();
    await send('Noida'); await chat.locator('select').waitFor();
    await chat.locator('select').selectOption('online'); await chat.getByRole('button', { name: 'Send question' }).click();
    await chat.locator('input[type="date"]').waitFor();
    const nextMonday = new Date(); nextMonday.setDate(nextMonday.getDate() + ((8 - nextMonday.getDay()) % 7 || 7));
    await chat.locator('input[type="date"]').fill(nextMonday.toISOString().slice(0, 10)); await chat.getByRole('button', { name: 'Send question' }).click();
    await chat.locator('select').waitFor(); await chat.locator('select').selectOption({ index: 1 }); await chat.getByRole('button', { name: 'Send question' }).click();
    await chat.getByText(/successfully|request.*submit|submitted/i).last().waitFor();
    assert.equal(sessionPayload.consultationMode, 'online'); assert.equal(sessionPayload.name, 'Test Visitor'); checks++;
    await chat.getByRole('button', { name: 'Reset AI chat' }).click();
    await chat.getByRole('button', { name: 'Connect with agent', exact: true }).click();
    await chat.getByText('Before connecting you to an agent, please share your full name.', { exact: true }).waitFor();
    await send('Test Visitor'); await chat.getByText('Please share your mobile number.', { exact: true }).waitFor();
    await send('9876543210'); await chat.locator('textarea[placeholder="Message agent..."]').waitFor();
    assert.equal(sessionPayload.visitorName, 'Test Visitor'); assert.equal(sessionPayload.visitorPhone, '9876543210'); checks++;
    assert.ok(await chat.evaluate((el) => el.getBoundingClientRect().right <= window.innerWidth && el.getBoundingClientRect().left >= 0));
    assert.deepEqual(errors, []); checks++;
    await fs.mkdir('.cache', { recursive: true }); await page.screenshot({ path: `.cache/chatbot-${viewport.width}.png` });
    await context.close();
  }
  console.log(`Passed ${checks} desktop/mobile chatbot checks: actual answers, sources, history, retry, session reset, full booking submission and live-agent lead flow. Network writes were mocked.`);
} finally { await browser?.close(); await new Promise((resolve) => server.close(resolve)); }
