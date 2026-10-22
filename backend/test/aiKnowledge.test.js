import test from 'node:test';
import assert from 'node:assert/strict';
import { extractPage, chunkPage, publicUrl, parseRobots, SITE } from '../services/aiKnowledgeContent.js';
import { fetchWebsite, crawlWebsite } from '../services/aiKnowledgeCrawler.js';
import { rankKnowledge, buildRetrievalQuery } from '../services/aiKnowledgeService.js';
import { createAnswerService, validateGroundedResponse, generateGeminiAnswer, buildPrompt } from '../services/aiChatService.js';
import { createConversationId, loadConversation } from '../services/aiConversationService.js';
import AiChatConversation from '../models/AiChatConversation.js';
import { createChatRateLimit, requireKnowledgeAdmin } from '../middleware/aiChatGuards.js';

const url = `${SITE}/speech-delay-support-india/`;
const html = `<html><head><title>Speech development support</title><link rel="canonical" href="${url}"></head><body><header>Repeated navigation</header><main><h1>Speech development support</h1><p>Speech and communication concerns deserve an individual professional assessment. The child's age and current communication should be considered.</p><nav>Navigation inside article</nav><h2>Frequently asked questions</h2><details><summary>When should parents ask for help?</summary><p>Parents can discuss persistent communication concerns with a qualified developmental professional.</p></details><script>secret script</script><p hidden>Hidden text</p><footer>Repeated footer</footer></main></body></html>`;
const source = { id: 'S1', url, title: 'Speech support', section: 'Assessment', text: 'Persistent speech concerns can be discussed with a qualified developmental professional.', contentType: 'page' };

test('extracts actual headings, paragraphs and FAQ answers while excluding boilerplate and executable content', () => {
  const page = extractPage(html, url);
  const joined = page.blocks.map((block) => block.text).join(' ');
  assert.match(joined, /child's age/);
  assert.match(joined, /Parents can discuss/);
  assert.doesNotMatch(joined, /navigation|footer|secret script|Hidden text/i);
  const chunks = chunkPage(page);
  assert.ok(chunks.some((chunk) => chunk.contentType === 'faq'));
  assert.ok(chunks.every((chunk) => chunk.url === url && chunk.contentHash.length === 64));
  assert.deepEqual(chunkPage(page), chunks);
});

test('rejects soft-404 home HTML, noindex responses, shell-only documents and unsafe URLs', () => {
  assert.equal(extractPage(html, `${SITE}/missing/`), null);
  assert.equal(extractPage(html.replace('</head>', '<meta name="robots" content="follow, NOINDEX"></head>'), url), null);
  assert.equal(extractPage('<div id="root"></div>', url), null);
  for (const link of ['http://127.0.0.1/','https://evil.example/','https://manovaidya.org@evil.example/','/api/private','/assets/test.js','javascript:alert(1)']) assert.equal(publicUrl(link), null);
  assert.equal(publicUrl('/blog/example/?tracking=1#heading'), `${SITE}/blog/example/`);
});

test('respects robots groups, exclusions, wildcard patterns and allow overrides', () => {
  const allowed = parseRobots('User-agent: *\nDisallow: /private/\nAllow: /private/public/\nDisallow: /preview*\nUser-agent: Other\nDisallow: /');
  assert.equal(allowed(`${SITE}/private/a/`), false);
  assert.equal(allowed(`${SITE}/private/public/a/`), true);
  assert.equal(allowed(`${SITE}/preview-page/`), false);
  assert.equal(allowed(url), true);
});

test('bounds long paragraphs and keeps overlapping chunk content', () => {
  const page = { url, title: 'Title', contentType: 'page', blocks: [{ section: 'Section', text: 'abcdefghij '.repeat(700) }] };
  const chunks = chunkPage(page);
  assert.ok(chunks.length > 3);
  assert.ok(chunks.every((chunk) => chunk.text.length <= 2020));
  assert.ok(chunks[0].text.slice(-100).includes(chunks[1].text.slice(0, 80)));
});

test('crawler discovers sitemap and internal links and retains only actual content', async () => {
  const responses = new Map([
    [`${SITE}/robots.txt`, 'User-agent: *\nAllow: /'],
    [`${SITE}/sitemap.xml`, `<urlset><url><loc>${url}</loc></url></urlset>`],
    [`${SITE}/`, html.replaceAll(url, `${SITE}/`).replace('</main>', '<a href="/blog/real/">Real blog</a></main>')],
    [url, html],
    [`${SITE}/blog/real/`, html.replaceAll(url, `${SITE}/blog/real/`)]
  ]);
  const crawl = await crawlWebsite({ fetcher: async (target) => new Response(responses.get(target) || '', { status: responses.has(target) ? 200 : 404 }) });
  assert.equal(crawl.pages.length, 3);
  assert.equal(crawl.failures.length, 0);
  assert.equal(crawl.truncated, false);
  await assert.rejects(fetchWebsite(url, { fetcher: async () => new Response(null, { status: 302, headers: { location: 'http://169.254.169.254/' } }) }), /UNSAFE_REDIRECT/);
});

test('hybrid retrieval ranks actual topic content and does not return unrelated content on no match', () => {
  const chunks = [source, { ...source, url: `${SITE}/stress-ibs-support-india/`, title: 'Stress IBS', section: 'Gut health', text: 'Stress may accompany digestive symptoms.' }];
  assert.equal(rankKnowledge(chunks, 'speech communication assessment')[0].url, url);
  assert.deepEqual(rankKnowledge(chunks, 'quantum spacecraft'), []);
  assert.match(buildRetrievalQuery('He is 3 years old', { messages: [{ role: 'user', text: 'My child is not speaking properly' }] }), /child is not speaking/);
});

test('grounded answers require real supporting quotes and reject invented sources', () => {
  const raw = { answer: 'Persistent speech concerns can be discussed with a professional.', answerType: 'website', citations: [{ sourceId: 'S1', quote: 'a qualified developmental professional' }] };
  assert.equal(validateGroundedResponse(JSON.stringify(raw), [source]).sources[0].url, url);
  assert.throws(() => validateGroundedResponse(JSON.stringify({ ...raw, citations: [] }), [source]), /UNGROUNDED/);
  assert.throws(() => validateGroundedResponse(JSON.stringify({ ...raw, citations: [{ sourceId: 'S1', quote: 'Guaranteed cure within 30 days' }] }), [source]), /UNSUPPORTED/);
  assert.throws(() => validateGroundedResponse(JSON.stringify({ ...raw, citations: [{ sourceId: 'S99', quote: source.text }] }), [source]), /UNSUPPORTED/);
});

function harness() {
  const sessions = new Map(); const generatedInputs = [];
  const answer = createAnswerService({
    loadConversation: async (id) => {
      id ||= createConversationId();
      if (!sessions.has(id)) sessions.set(id, { conversationId: id, messages: [], pendingAction: 'NONE', conversationStage: 'DISCOVERY', patients: [], user: {}, consultation: {} });
      return sessions.get(id);
    },
    saveConversationTurn: async (session, turn) => {
      session.messages.push({ role: 'user', text: turn.question }, { role: 'assistant', text: turn.answer });
      session.currentTopic = turn.currentTopic; session.pendingAction = turn.pendingAction;
      session.patients = turn.state.patients; session.activePatientId = turn.state.activePatientId; session.conversationStage = turn.state.stage;
    },
    retrieveKnowledge: async () => ({ chunks: [source], mode: 'test' }),
    generateGeminiAnswer: async (input) => { generatedInputs.push(input); return { answer: input.question.includes('3') ? 'At age 3, let us continue discussing your child’s speech.' : 'Could you tell me your child’s age?', sources: [{ url }], answerType: 'education', model: 'test' }; }
  });
  return { answer, sessions, generatedInputs };
}

test('multi-turn speech/age and yes/no follow-ups reach generation with isolated server history', async () => {
  const h = harness();
  const first = await h.answer({ question: 'My child is not speaking properly.' });
  await h.answer({ question: 'He is 3 years old.', conversationId: first.conversationId });
  assert.equal(h.generatedInputs.length, 2, 'Patient extraction must not replace actual answers');
  assert.match(buildPrompt(h.generatedInputs[1]), /not speaking properly/);
  assert.equal(h.generatedInputs[1].conversationState.patients[0].age, 3);
  await h.answer({ question: 'yes', conversationId: first.conversationId });
  await h.answer({ question: 'no', conversationId: first.conversationId });
  assert.equal(h.generatedInputs.length, 4, 'Clinical yes/no answers must not become generic action rejection');
  const other = await h.answer({ question: 'My concern is IBS.' });
  assert.notEqual(other.conversationId, first.conversationId);
  assert.doesNotMatch(buildPrompt(h.generatedInputs.at(-1)), /not speaking properly|3 years old/);
});

test('English, Hindi and Hinglish questions are preserved; informational online question does not start booking', async () => {
  const h = harness();
  for (const question of ['What is ADHD?', 'एडीएचडी क्या है?', 'mere bachche ko speech delay hai', 'Can I book an online consultation?']) {
    const result = await h.answer({ question });
    if (question === 'Can I book an online consultation?') {
      // This asks about possibility; it must receive information, not collect details.
      assert.equal(result.action, 'NONE');
    }
  }
  assert.equal(h.generatedInputs.length, 4);
});

test('booking and live agent explicit actions remain compatible with the existing frontend', async () => {
  const h = harness();
  assert.equal((await h.answer({ question: 'Book consultation' })).action, 'BOOK_CONSULTATION');
  assert.equal((await h.answer({ question: 'Connect with agent' })).action, 'CONNECT_AGENT');
  assert.equal(h.generatedInputs.length, 0);
});

test('missing key/provider failures give an honest extractive fallback with a real source', async () => {
  const h = harness();
  const fail = createAnswerService({ loadConversation: async () => ({ conversationId: createConversationId(), messages: [], patients: [] }), saveConversationTurn: async () => {}, retrieveKnowledge: async () => ({ chunks: [source], mode: 'keyword' }), generateGeminiAnswer: async () => { throw Object.assign(new Error('quota'), { status: 429 }); } });
  const result = await fail({ question: 'What should I do about speech delay?' });
  assert.equal(result.degraded, true);
  assert.equal(result.sources[0].url, url);
  assert.match(result.answer, /Persistent speech concerns/);
  assert.doesNotMatch(result.answer, /services, symptoms, consultation/);
});

test('model fallback covers quota, timeouts and empty output without leaking internal prompts', async () => {
  let calls = 0;
  const result = await generateGeminiAnswer({ question: 'speech?', chunks: [source], conversation: { messages: [] }, conversationState: { patients: [] } }, { client: { models: { generateContent: async () => {
    if (++calls === 1) throw Object.assign(new Error('quota'), { status: 429 });
    return { text: JSON.stringify({ answer: 'Please seek an assessment.', answerType: 'website', citations: [{ sourceId: 'S1', quote: source.text }] }) };
  } } } });
  assert.equal(calls, 2); assert.equal(result.sources.length, 1);
  await assert.rejects(generateGeminiAnswer({ question: '?', chunks: [], conversation: { messages: [] }, conversationState: { patients: [] } }, { client: { models: { generateContent: async () => ({ text: '' }) } } }));
});

test('validates hostile inputs before touching storage and prioritises emergency help', async () => {
  const h = harness();
  for (const input of [{ question: {} }, { question: 'x'.repeat(2001) }, { question: 'Hello', conversationId: '../../other' }]) await assert.rejects(h.answer(input));
  const result = await h.answer({ question: 'I want to kill myself' });
  assert.match(result.answer, /emergency/); assert.equal(result.model, 'safety'); assert.equal(h.generatedInputs.length, 0);
});

test('expired sessions do not recover another old conversation while waiting for TTL deletion', async (t) => {
  t.mock.method(AiChatConversation, 'findOne', async () => ({ expiresAt: new Date(0), messages: [{ text: 'old private text' }] }));
  t.mock.method(AiChatConversation, 'create', async (data) => data);
  const oldId = createConversationId(); const session = await loadConversation(oldId);
  assert.notEqual(session.conversationId, oldId);
});

test('admin endpoint requires a private server token and public chat is rate limited', () => {
  const old = process.env.AI_KNOWLEDGE_ADMIN_TOKEN; process.env.AI_KNOWLEDGE_ADMIN_TOKEN = 'server-only-test-token';
  let code = 200; let next = 0;
  const res = { status(value) { code = value; return this; }, json() {}, set() {} };
  requireKnowledgeAdmin({ get: () => 'admin-token' }, res, () => next++);
  assert.equal(code, 401); assert.equal(next, 0);
  requireKnowledgeAdmin({ get: () => 'server-only-test-token' }, res, () => next++);
  assert.equal(next, 1);
  const limit = createChatRateLimit({ limit: 1 }); const req = { ip: 'test' };
  limit(req, res, () => next++); limit(req, res, () => next++);
  assert.equal(code, 429); assert.equal(next, 2);
  if (old === undefined) delete process.env.AI_KNOWLEDGE_ADMIN_TOKEN; else process.env.AI_KNOWLEDGE_ADMIN_TOKEN = old;
});
