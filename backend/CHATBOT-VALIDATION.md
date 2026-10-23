# Manovaidya chatbot: implementation and verification, 22 October 2026

The existing RAG assistant has been inspected, extended, and tested. It is usable
with keyword retrieval and transparent provider fallbacks. Full production
acceptance is **not complete**: embedding coverage is partial and the new
knowledge administration token is not configured. The earlier chat-generation
quota issue has been addressed as described below. No public deployment was made.

## Fix for the repeated AI-unavailable message

Both previously configured Gemini 2.5 models returned HTTP 429 with an exhausted
per-model daily free-tier quota and a provider RetryInfo delay of about 69,000
seconds. Immediate retries could not recover those models. This was verified
from actual SDK responses without logging credentials.

The backend now uses `GEMINI_CHAT_MODEL=gemini-3.5-flash-lite` and
`GEMINI_CHAT_FALLBACK_MODEL=gemini-3.1-flash-lite`, both tested with grounded
generation. These defaults remain overridable through server environment
configuration. Only those two settings were added/updated in the existing local
ignored `.env`; existing credentials were preserved.

`aiGeminiPolicy.js` tracks model-specific cooldowns, honours provider RetryInfo
for exhausted quota, and temporarily avoids models returning transient server
errors. The healthy fallback model remains available independently. Standalone
English questions no longer require a second generation call merely to rewrite
the query. Contextual/multilingual rewriting is retained; `GEMINI_QUERY_MODEL`
can optionally select a separate model and otherwise uses the configured chat
fallback. Newer models do not receive legacy temperature/thinking-budget options.

The old "The AI response is temporarily unavailable. Here is a relevant passage
from the website" banner has been removed. If both providers fail, the assistant
can still show up to two complete source sentences labelled "From Manovaidya’s
website" with a real citation, without a useless Retry button. Its API metadata
continues to mark this as degraded, with `retryable: false`; the extract is not
misrepresented as generated text. Missing evidence and network errors still
receive an honest error/unknown state with retry where appropriate.

Current real-provider verification completed 12 turns with 11 generated replies
and one source fallback during transient timeouts, compared with one generated
reply and 11 fallbacks before the fix. The exact Neuro-Ayurveda question returned
normal generated answers with validated citations through the running local
HTTP endpoint. Provider availability/quota is still external to this application;
this change does not claim unlimited API capacity. Google documents
[project/model quota limits](https://ai.google.dev/gemini-api/docs/rate-limits)
and [transient-error backoff](https://ai.google.dev/gemini-api/docs/troubleshooting).

## Existing architecture

- `frontend`: React/Vite, SSR and prerendered public pages. `AiChatBot.jsx` owns
  the chat interface, booking form, lead form and live-agent polling. Normal
  chat calls the existing `/api/ai-chat` endpoint through Axios.
- `backend`: Express/Mongoose. `aiChatController.js` validates request outcomes;
  `aiChatService.js` coordinates intent, bounded server-owned history, retrieval,
  Gemini, citation validation and fallback. Chat and embedding models use the
  existing server-side `@google/genai` integration.
- MongoDB: `AiChatConversation` stores isolated opaque sessions, recent turns,
  bounded older context, pending actions, patient/booking state and 24-hour TTL.
  `AiKnowledge.js` stores pages, chunks, embeddings and a sync-job lease.
- Public blogs and case studies come from the existing Mongoose models and
  public API/sitemaps. Published blog filtering excludes hidden/test content.
  The website build fetches public content and creates readable article HTML.
- Booking continues to use the existing consultation and availability APIs.
  The frontend collects contact details through its existing form. Live support
  continues to use the existing session/lead/polling APIs. The admin app and its
  login/authentication flow were inspected and left unchanged.
- Deployment consists of frontend static/SSR artifacts, the Node backend and
  the existing Nginx configuration in `frontend/deploy`.

## Changes in this pass

Greetings, thanks, acknowledgements and goodbye/exit work without Gemini or
retrieval. Clinical yes/no replies still use history and generation. Exit ends
an active booking state without deleting records. Hindi normalization now
preserves vowel marks. Emergency detection handles apostrophes, self-harm wording
and Hindi input. Retrieval failures are contained, and an empty rewritten query
retries the original question. Generated URLs must match supplied sources.

Crawler discovery now combines the sitemap, robots-declared sitemaps, internal
links, published database URLs and previously indexed active pages. Database
records supply discovery URLs only: the crawler must fetch the actual public
page before indexing it. Private/login/patient/account/dashboard paths and unsafe
redirects are rejected. Requests are spaced across workers, respect crawl-delay
and Retry-After, and leave long server backoffs for a later run. Sitemap discovery
failures are recorded and prevent broad stale-record pruning.

Page metadata now includes content type. Search excludes substring-only and weak
lexical matches. Explicit topic changes no longer inherit unrelated query terms
in the non-provider query fallback. Indexed timestamps reach the model. Expired
conversation detail updates cannot revive old sessions. HTTP parsing errors now
return safe 400/413 responses; server error details are not sent to visitors.

The frontend has a synchronous submission guard, labelled inputs and chat log,
an accessible loading status, a 2,000-character input limit, IME-safe Enter
handling, and local closure of booking/lead flows. Existing layout and booking,
retry, source links, session reset and live-agent behavior are preserved.

## Indexing and retrieval pipeline

An operator or optional schedule runs a database-leased sync. The crawler checks
robots, discovers URLs, validates same-origin redirects/canonicals/noindex, and
extracts readable main content while excluding repeated navigation and scripts.
Headed sections become overlapping bounded chunks. Hashes identify changed
content; existing compatible embeddings are reused. Removed/restricted pages and
obsolete chunks are deactivated. Transient failures retain prior good content.
Errors, exclusions, discovery failures and timestamps remain visible in status.

A question uses server-owned recent history and a bounded query rewrite. Search
combines lexical ranking with Atlas vector search, or bounded local cosine search
when Atlas is unavailable. Lexical search remains available without embeddings.
At most eight distinct chunks, three per page, and 12,000 characters enter the
grounded generation prompt. The response validator checks source IDs, verbatim
supporting quotes and URLs. A failure returns a labelled actual source excerpt
or an honest unavailable answer. No website crawl runs on ordinary chat requests.

The configured consultation fee/schedule is an existing business source aligned
with the booking form. It is not a live appointment lookup; appointment requests
remain subject to the existing availability and confirmation workflow.

## Actual indexing results

See [knowledge-index-report.json](knowledge-index-report.json) for every checked
URL, title, page type, chunk count, timestamp, status and error, plus vector-index
status. This report contains public source metadata, not credentials or chats.

- 71 page destinations visited; the crawl was not truncated.
- 68 accessible pages successfully indexed; all 68 were unchanged on the final
  refresh. Five accessible public blog articles are included.
- 2,243 active chunks; 360 had current 768-dimensional embeddings when the report
  was captured. Atlas index `manovaidya_knowledge_vector` was READY and queryable.
- Two additional published database URLs returned HTTP 404 and were excluded:
  `/blog/does-my-child-have-autism-early-signs-of-autism-in-children/` and
  `/case-studies/test-data-for-csestudies/`.
- `/success-story-videos/` was excluded because it had no meaningful readable
  main content. Video/audio transcription and arbitrary PDFs are not implemented.
- No sitemap discovery failure occurred in the actual refresh. A published
  database record alone does not prove that its public page is deployed.

## Required configuration

Keep these variables in backend configuration. Do not overwrite existing secrets
or place provider/admin tokens in any `VITE_` variable.

| Variable | Purpose |
| --- | --- |
| `MONGODB_URI` | Existing database connection, required |
| `GEMINI_API_KEY` | Existing server-only Gemini credential |
| `GEMINI_CHAT_MODEL` | Configurable primary model; default `gemini-3.5-flash-lite` |
| `GEMINI_CHAT_FALLBACK_MODEL` | Configurable fallback; default `gemini-3.1-flash-lite` |
| `GEMINI_QUERY_MODEL` | Optional query-rewrite model; defaults to the chat fallback |
| `GEMINI_EMBEDDING_MODEL` | Existing default `gemini-embedding-001`; 768 dimensions |
| `AI_USE_ATLAS_VECTOR` | Set `false` to use local hybrid/keyword retrieval |
| `AI_VECTOR_INDEX` | Existing default `manovaidya_knowledge_vector` |
| `AI_KNOWLEDGE_ADMIN_TOKEN` | New independent operator secret; currently unset |
| `AI_KNOWLEDGE_SYNC_HOURS` | Optional 1–168 hours; unset disables the schedule |
| `PORT` | Existing backend port; default 5012 |
| `FRONTEND_DIST` | Optional built frontend directory; default `../frontend/dist` |

To generate an operator secret locally, use
`node -e "console.log(require('node:crypto').randomBytes(32).toString('hex'))"`.
Store the result privately as `AI_KNOWLEDGE_ADMIN_TOKEN` in backend deployment
configuration. Do not commit it. Admin knowledge endpoints accept it in the
`x-knowledge-admin-token` header. Existing admin-login credentials do not grant
access to these new operator endpoints. Until configured, they return HTTP 503.

## Setup, indexing and deployment commands

Run each group from its indicated directory. `npm ci` installs locked versions.
Do not recreate an already-existing Atlas index; the current index is READY.

```powershell
# backend
npm ci
npm test
npm run knowledge:status
npm run knowledge:vector-index # first setup only; requires Atlas privileges
npm run knowledge:sync
npm run knowledge:sync -- --no-embeddings # explicit lexical-only refresh
node scripts/aiKnowledge.js --query "speech delay assessment"
npm run verify:chat:live
npm start
```

```powershell
# frontend
npm ci
npm run build
npm run verify:chatbot
```

```powershell
# admin-panel
npm ci
npm run build
```

Deploy the frontend build/SSR artifacts using `frontend/deploy/README.md`, restart
the existing backend service, and configure the schedule if desired. Public
deployment was not performed in this pass. Rebuild static pages after publishing
content, then reindex; reindexing does not publish missing website pages.

## Verification actually run

| Check | Result |
| --- | --- |
| Backend `npm test` | 44 passed, zero failed |
| Frontend build, SSR, prerender and SEO validation | Passed; 92 routes, 69 sitemap destinations, five public blog details |
| Admin production build | Passed; existing large-bundle warning |
| Desktop/mobile chatbot checks | 20 passed; source links, follow-ups, retry, source-excerpt display without Retry, reset isolation, exit during booking, accessibility labels, booking submission and agent lead flow |
| Actual local backend HTTP checks | Seven passed: invalid/overlong/session input, malformed JSON, protected knowledge status and rate-limit Retry-After |
| Real local browser, no mocked AI | Exact Neuro-Ayurveda question generated by `gemini-3.5-flash-lite`; citation rendered, no outage banner, zero Retry buttons; screenshot `.cache/chatbot-neuro-live.png` in frontend |
| Real Gemini/MongoDB retrieval smoke | 12 turns completed; 11 generated answers and one transparent source fallback during provider timeouts |
| Actual website/database refresh | 68 pages indexed; two 404 failures and one unreadable-video exclusion reported |
| Atlas inspection | Existing vector index READY/queryable |
| Whitespace diff check | Passed |

Booking and live-agent writes were mocked in browser tests. Real-provider smoke
conversations were held in memory. No real consultation, email or live-agent
message was submitted. Knowledge collections were refreshed in the configured
database. Local logs and screenshots are in the ignored `.cache` directories.

The additional backend tests exercise social turns without providers, closure
during booking, original-query retries, storage/provider outages, unsafe/private
URLs, alternate sitemap discovery, long Retry-After handling, weak search
matches, explicit topic changes, fabricated links, medical emergency wording,
malformed session identifiers and expired-session updates.

## Remaining limits

Full semantic coverage still depends on embedding quota. Chat models were updated
and real generation was reverified, but transient provider timeouts can still
require the honest source fallback. Re-running sync resumes missing embeddings
without manually editing prompts. The operator
token must be configured to enable remote knowledge administration. Scheduling
is available but remains opt-in.

The crawler consumes public rendered HTML; it does not launch a JavaScript
browser or transcribe videos/PDFs. The current website's prerendered blogs were
readable. Off-origin sources and private patient records are intentionally absent.
Citation validation checks quotes/links, not full logical entailment of every
medical sentence; clinical review and broader adversarial evaluation remain
necessary. Existing process-local rate limits and session locks need shared
storage before a multi-instance deployment. Local cosine/lexical candidates are
bounded to 6,000 chunks; larger corpora need a scalable lexical candidate query.
Existing admin authentication and unrelated public APIs were not redesigned.
The existing admin UI uses a session-storage gate, and the inspected blog,
case-study and live-agent route definitions lack per-route authorization
middleware. This pre-existing access-control issue remains outside the requested
authentication changes; the knowledge operator token protects only the new
knowledge endpoints. These routes require a separate security review before
claiming that the complete application has production-grade access controls.

## Files created or modified in this pass

Created:

- `backend/CHATBOT-VALIDATION.md`
- `backend/knowledge-index-report.json`

Modified:

- `backend/CHATBOT-UPGRADE.md`
- `backend/models/AiKnowledge.js`
- `backend/server.js`
- `backend/services/aiChatIntentService.js`
- `backend/services/aiChatService.js`
- `backend/services/aiGeminiPolicy.js` (created during the provider-error fix)
- `backend/services/aiConversationService.js`
- `backend/services/aiKnowledgeContent.js`
- `backend/services/aiKnowledgeCrawler.js`
- `backend/services/aiKnowledgeService.js`
- `backend/test/aiKnowledge.test.js`
- `frontend/src/components/AiChatBot.jsx`
- `frontend/scripts/verify-chatbot.mjs`
