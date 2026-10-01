import assert from 'node:assert/strict';
import test from 'node:test';
import { auditTestInternals } from '../services/specialSeoAuditService.js';

const pageUrl = 'https://manovaidya.org/teen-depression-support';

const validHtml = `<!doctype html>
<html>
  <head>
    <title>Teen Depression Support in India | Manovaidya</title>
    <meta name="description" content="Compassionate teen depression support in India with structured guidance for families and adolescents." />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://manovaidya.org/teen-depression-support/" />
    <meta property="og:title" content="Teen Depression Support in India | Manovaidya" />
    <meta property="og:description" content="Compassionate teen depression support in India with structured guidance for families and adolescents." />
    <meta property="og:url" content="https://manovaidya.org/teen-depression-support" />
    <meta property="og:image" content="https://manovaidya.org/images/teen-depression-support-india.png" />
    <script type="application/ld+json">{"@context":"https://schema.org","@type":"MedicalWebPage","name":"Teen Depression Support"}</script>
  </head>
  <body>
    <div id="root">
      <main>
        <h1>Teen Depression Support in India</h1>
        <h2>How Manovaidya Supports Teens</h2>
        <p>Supportive care for teen depression and low mood.</p>
        <a href="/teen-mental-health-care-india">Teen mental health care</a>
        <img src="/images/teen-depression-support-india.png" alt="Teen depression support consultation" />
      </main>
    </div>
  </body>
</html>`;

const scoreHtml = (html) => {
  const evidence = auditTestInternals.parseHtmlEvidence(html, pageUrl);
  const checks = auditTestInternals.buildHtmlChecks(evidence, pageUrl);
  return { checks, scoring: auditTestInternals.scoreChecks(checks) };
};

test('same normalized HTML produces same hash, checks and score', () => {
  const firstHash = auditTestInternals.normalizeHtmlForHash(validHtml);
  const secondHash = auditTestInternals.normalizeHtmlForHash(validHtml.replace(/\r?\n/g, '\r\n'));
  const first = scoreHtml(validHtml);
  const second = scoreHtml(validHtml);

  assert.equal(firstHash, secondHash);
  assert.deepEqual(first.checks, second.checks);
  assert.equal(first.scoring.score, second.scoring.score);
});

test('removing title fails only the title check and lowers score', () => {
  const baseline = scoreHtml(validHtml);
  const changed = scoreHtml(validHtml.replace(/<title>[\s\S]*?<\/title>/, ''));
  const changedChecks = changed.checks
    .filter((check, index) => JSON.stringify(check) !== JSON.stringify(baseline.checks[index]))
    .map((check) => check.id);

  assert.deepEqual(changedChecks, ['title']);
  assert.equal(changed.checks.find((check) => check.id === 'title').status, 'FAIL');
  assert.ok(changed.scoring.score < baseline.scoring.score);
});

test('removing canonical fails only the canonical check and lowers score', () => {
  const baseline = scoreHtml(validHtml);
  const changed = scoreHtml(validHtml.replace(/<link rel="canonical"[^>]*>/, ''));
  const changedChecks = changed.checks
    .filter((check, index) => JSON.stringify(check) !== JSON.stringify(baseline.checks[index]))
    .map((check) => check.id);

  assert.deepEqual(changedChecks, ['canonical']);
  assert.equal(changed.checks.find((check) => check.id === 'canonical').status, 'FAIL');
  assert.ok(changed.scoring.score < baseline.scoring.score);
});

test('unverified checks are excluded from the score denominator', () => {
  const checks = [
    { id: 'title', status: 'PASS', points: 10, maxPoints: 10 },
    { id: 'canonical', status: 'FAIL', points: 0, maxPoints: 10 },
    { id: 'sitemap', status: 'UNVERIFIED', points: 0, maxPoints: 10 }
  ];

  assert.equal(auditTestInternals.scoreChecks(checks).score, 50);
});
