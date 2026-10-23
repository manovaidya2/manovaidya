# Chatbot and HTTP 404 implementation report

For the latest implementation changes, actual re-indexing results, provider
quota limitations and verification, see [CHATBOT-VALIDATION.md](CHATBOT-VALIDATION.md).
The results below describe the earlier implementation pass.

## Website-grounded assistant

The browser no longer ships a hand-written knowledge corpus, extracts JSX as
website content, or substitutes canned service descriptions after a 5.5-second
timeout. `/api/ai-chat` now retrieves server-owned knowledge and sends the exact
question, recent conversation, bounded older context and selected evidence to
Gemini. Browser-supplied knowledge/history is not trusted.

The crawler discovers sitemap URLs and internal links, respects robots rules,
follows only same-origin redirects, checks canonicals/noindex, and extracts actual
main content. Navigation, footers, executable code and repeated page blocks are
excluded. Sections become overlapping chunks with hashes, titles, URLs and types.
Missing pages are not treated as sources merely because a SPA returns HTTP 200.

MongoDB stores page status, retry/error information, active content revisions,
chunks and embeddings. Unchanged chunk embeddings are reused; changed/removed
content is deactivated. Failed fetches preserve the previous successful source
unless the source is definitively removed. A database lease prevents duplicate
sync jobs. Crawl requests retry bounded transient failures.

Retrieval uses Atlas Vector Search with lexical/semantic rank fusion. If Atlas
is unavailable, stored vectors support bounded local cosine search; if embeddings
are unavailable, lexical retrieval continues. Query rewriting translates Hindi
and Hinglish and resolves short contextual replies without crawling per message.
Source selection also works when embedding coverage is incomplete.

Answers include source metadata. The server requires valid source IDs and
verbatim evidence for website answers, and rejects invented quotes/uncited clinic
facts and repeated follow-up questions. Clinical prompts prohibit diagnosis,
prescriptions, guaranteed outcomes and invented fees. Provider failures produce
an explicitly labelled extract from an actual source or an honest unavailable
message, with a frontend Retry button.

Conversation IDs remain opaque 48-character bearer identifiers. Each session has
10 recent messages, bounded older context, a 24-hour TTL and an explicit expiry
check. A reset creates a fresh ID and ignores replies from the previous active
request. A process-local guard prevents concurrent turns for the same session.
Public chat input is bounded to 2,000 characters and 20 requests/IP/minute.

The existing booking form, availability checks, consultation submission, live-agent
lead flow and admin login UI remain in place. Informational questions do not
automatically open booking. Booking side questions now use the grounded backend.
A pre-existing document-level booking click interceptor was scoped to allow the
chatbot's own booking flow to work without opening a competing modal.

## Environment and deployment

Keep credentials on the backend. Do not overwrite the existing `.env`.

| Variable | Purpose/default |
| --- | --- |
| `MONGODB_URI` | Existing MongoDB connection; required |
| `GEMINI_API_KEY` | Existing server-only Gemini key |
| `GEMINI_CHAT_MODEL` | `gemini-2.5-flash` |
| `GEMINI_CHAT_FALLBACK_MODEL` | `gemini-2.5-flash-lite` |
| `GEMINI_EMBEDDING_MODEL` | `gemini-embedding-001`, 768 dimensions |
| `AI_USE_ATLAS_VECTOR` | Enabled unless set to `false` |
| `AI_VECTOR_INDEX` | `manovaidya_knowledge_vector` |
| `AI_KNOWLEDGE_SYNC_HOURS` | Optional 1–168 hours; disabled when unset |
| `AI_KNOWLEDGE_ADMIN_TOKEN` | New random server-side secret for knowledge administration |
| `FRONTEND_DIST` | Optional frontend release directory; default `../frontend/dist` relative to server file |

Chat models are independent of SEO-generation model settings. The old chat model
defaults produced 503/timeouts during testing; the new defaults were verified
with actual generation requests. The existing INR 599 consultation fee and
online/clinic schedules are supplied as explicit booking configuration, consistent
with the unchanged booking form. Future business changes must update that form
and the backend business source together.

From `backend`, run `npm ci`, `npm run knowledge:vector-index`, and
`npm run knowledge:sync`. The vector command creates an Atlas index with cosine
similarity on `embedding` (768 dimensions), filtering on `active` and
`embeddingModel`. Index creation requires the relevant database privilege; wait
until the index reports READY/queryable. Normal MongoDB indexes are initialized
by the sync command. New collections are `ai_knowledge_pages`,
`ai_knowledge_chunks`, and `ai_knowledge_sync`.

Inspect with `npm run knowledge:status` or
`node scripts/aiKnowledge.js --query "speech delay assessment"`. An authenticated
operator can call `GET /api/ai-chat/knowledge` or
`POST /api/ai-chat/knowledge/sync` using the `x-knowledge-admin-token` header.
The frontend's existing `admin-token` is intentionally insufficient for these
new write operations; the existing login implementation was not changed.

Build/deploy the complete frontend release and restart the backend. Set the sync
interval if scheduled refresh is desired. Re-run sync after publication changes
or provider-quota recovery; chunks missing embeddings are retried incrementally.
Deploy the Nginx rules in `frontend/deploy/README.md` for production 404 behavior.

## Actual verification on 2026-10-22

- Crawled all 69 sitemap destinations. 68 yielded meaningful text; the video-only
  success-story page was excluded after extraction instead of inventing content.
  All five published blogs were indexed. Current active corpus: 2,243 chunks.
- Verified `gemini-embedding-001` availability and actual 768-dimensional vectors.
  141 active chunks currently have embeddings. The provider returned 429 during
  ingestion; remaining chunks remain searchable through lexical/hybrid fallback.
- Created Atlas vector index and verified READY/queryable state.
- Backend tests: 36 passed, covering extraction, robots, soft 404 rejection,
  retrieval, citation validation, language preservation, history, isolation,
  input validation, expiry, provider failure, admin protection, booking and handoff.
- Real Gemini/Atlas smoke test: 12 turns; 11 generated responses and one explicitly
  degraded response. Source quotes were checked against stored website text.
  Cases include ADHD, Neuro-Ayurveda, fees, online consultation, speech/age/yes
  follow-ups, Hindi/Hinglish, a published blog and unsupported services.
- Desktop/mobile chatbot: 16 browser checks passed, including source links,
  retry without duplicate user messages, reset isolation, complete booking form
  submission and agent lead flow. Booking/live-agent writes were mocked.
- Client build, SSR, 92 prerendered routes and all 69 sitemap SEO checks passed.
- Desktop/mobile content hydration: 22 route checks passed.
- HTTP 404 regression: 26 HTTP/SSR/browser checks passed. Real Nginx: 1,201
  responses passed. Existing canonical URLs and valid pages remained successful.
- Direct local probes: missing pages return custom SSR HTML and HTTP 404 on Vite
  development (5173), Express backend (5012), and Vite preview. Valid pages return 200.

Generated local evidence is under `backend/.cache` and `frontend/.cache` and is
not committed. No booking, email, live-agent message or admin-login change was
sent to production during verification. Knowledge collections and the new vector
index were populated using the configured database; the public website/API
deployment was not changed.

## Limitations

Full semantic coverage depends on provider embedding quota; repeated/scheduled
sync resumes missing embeddings. Provider generation can also be rate limited;
the fallback is deliberately transparent. Source-quote validation is not a
formal proof that every generated medical claim follows from its evidence;
human review remains appropriate for clinical content and marketing claims.
The local cosine fallback reads at most 6,000 chunks; larger corpora should use
Atlas with an appropriately bounded lexical candidate query. IP rate limits and
turn concurrency are process-local; multi-instance deployments need a shared
limiter/lock. Older conversation context is bounded text compaction, not an
unlimited semantic memory. Static publishing still requires rebuilding the
frontend release, separately from refreshing the chatbot's website knowledge.

## Files changed for this work

- Backend: `controllers/aiChatController.js`, `controllers/aiKnowledgeController.js`,
  `middleware/aiChatGuards.js`, `middleware/frontendPages.js`, `models/AiKnowledge.js`,
  `routes/aiChatRoutes.js`, `server.js`, `package.json`, `package-lock.json`, `.gitignore`.
- Backend services: `aiChatService.js`, `aiChatIntentService.js`,
  `aiConversationService.js`, `aiConsultationStateService.js`, `aiEmbeddingService.js`,
  `aiKnowledgeContent.js`, `aiKnowledgeCrawler.js`, `aiKnowledgeService.js`.
- Backend operations/tests: `scripts/aiKnowledge.js`, `scripts/verifyAiChat.js`,
  `test/aiKnowledge.test.js`, this report.
- Frontend chatbot: `src/components/AiChatBot.jsx`, the booking click guard in
  `src/components/Header.jsx`, `scripts/verify-chatbot.mjs`, `package.json`.
- Frontend 404/SSR: `src/pages/NotFoundPage.jsx`, `src/pages/BlogDetails.jsx`,
  `src/pages/CaseStudyDetails.jsx`, `src/utils/publicRoutes.js`, `src/App.jsx`,
  `src/main.jsx`, `src/entry-server.jsx`, `vite.config.js`,
  `scripts/prerender.mjs`, `scripts/serve-pages.mjs`, `scripts/vite-page-status.mjs`,
  `scripts/verify-404.mjs`, `scripts/verify-seo.mjs`, `scripts/verify-nginx.mjs`,
  `scripts/verify-hydration.mjs`, `deploy/manovaidya.nginx.conf`, `deploy/README.md`.
- `frontend/public/sitemap.xml` was regenerated from current public data; the
  404 page is excluded. Earlier SEO payload/canonical fixes were preserved.
