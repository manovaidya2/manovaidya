import { KnowledgePage, KnowledgeChunk, KnowledgeSync } from '../models/AiKnowledge.js';
import { crawlWebsite } from './aiKnowledgeCrawler.js';
import { chunkPage, hashText, cleanText } from './aiKnowledgeContent.js';
import { embedTexts, embeddingModel, cosine, EMBEDDING_DIMENSIONS } from './aiEmbeddingService.js';

let cache = null; let cacheTime = 0;
export const invalidateKnowledgeCache = () => { cache = null; cacheTime = 0; };
export const vectorIndexDefinition = () => ({
  name: process.env.AI_VECTOR_INDEX || 'manovaidya_knowledge_vector', type: 'vectorSearch',
  definition: { fields: [
    { type: 'vector', path: 'embedding', numDimensions: EMBEDDING_DIMENSIONS, similarity: 'cosine' },
    { type: 'filter', path: 'active' }, { type: 'filter', path: 'embeddingModel' }
  ] }
});
export async function createKnowledgeIndexes({ vector = false } = {}) {
  await Promise.all([KnowledgePage.init(), KnowledgeChunk.init(), KnowledgeSync.init()]);
  if (vector) {
    // Native driver command avoids depending on a particular Mongoose wrapper version.
    await KnowledgeChunk.db.db.command({ createSearchIndexes: KnowledgeChunk.collection.name, indexes: [vectorIndexDefinition()] });
  }
}

export async function syncWebsiteKnowledge({ noEmbeddings = false, maxPages = 180, fetcher = fetch } = {}) {
  const startedAt = new Date();
  await KnowledgeSync.updateOne({ _id: 'website' }, { $setOnInsert: { running: false } }, { upsert: true });
  const lease = await KnowledgeSync.findOneAndUpdate({ _id: 'website', $or: [{ running: { $ne: true } }, { leaseUntil: { $lt: startedAt } }] }, { $set: { running: true, startedAt, leaseUntil: new Date(Date.now() + 30 * 60000), lastError: '' } }, { new: true });
  if (!lease) throw Object.assign(new Error('A knowledge sync is already running.'), { code: 'SYNC_RUNNING' });
  const stats = { indexedPages: 0, unchangedPages: 0, chunks: 0, embedded: 0, embeddingUnavailable: false };
  try {
    const crawl = await crawlWebsite({ fetcher, maxPages, onPage: async (page) => {
      const contentHash = hashText(JSON.stringify([page.title, page.blocks]));
      const previous = await KnowledgePage.findOne({ url: page.url }).lean();
      const chunks = [...new Map(chunkPage(page).map((chunk) => [chunk.contentHash, chunk])).values()];
      const old = await KnowledgeChunk.find({ url: page.url }).lean();
      const oldByHash = new Map(old.map((chunk) => [chunk.contentHash, chunk]));
      const missing = chunks.filter((chunk) => oldByHash.get(chunk.contentHash)?.embeddingModel !== embeddingModel() || oldByHash.get(chunk.contentHash)?.embedding?.length !== EMBEDDING_DIMENSIONS);
      const vectors = new Map();
      if (!noEmbeddings) for (let offset = 0; offset < missing.length; offset += 16) {
        const batch = missing.slice(offset, offset + 16);
        const values = await embedTexts(batch.map((chunk) => `${chunk.title}\n${chunk.section}\n${chunk.text}`));
        if (!values) { stats.embeddingUnavailable = true; break; }
        batch.forEach((chunk, index) => vectors.set(chunk.contentHash, values[index])); stats.embedded += values.length;
      }
      if (chunks.length) await KnowledgeChunk.bulkWrite(chunks.map((chunk) => ({ updateOne: {
        filter: { url: page.url, contentHash: chunk.contentHash },
        update: { $set: { ...chunk, active: true, lastSeenAt: startedAt, ...(vectors.has(chunk.contentHash) ? { embedding: vectors.get(chunk.contentHash), embeddingModel: embeddingModel(), embeddedAt: new Date() } : {}) } }, upsert: true
      } })));
      await KnowledgeChunk.updateMany({ url: page.url, contentHash: { $nin: chunks.map((chunk) => chunk.contentHash) } }, { $set: { active: false } });
      await KnowledgePage.updateOne({ url: page.url }, { $set: { title: page.title, contentHash, active: true, status: 'indexed', lastError: '', lastSeenAt: startedAt, lastSuccessAt: new Date(), chunkCount: chunks.length } }, { upsert: true });
      stats.chunks += chunks.length; stats.indexedPages++;
      if (previous?.contentHash === contentHash) stats.unchangedPages++;
      console.log('[ai-knowledge] indexed', { url: page.url, chunks: chunks.length, changed: previous?.contentHash !== contentHash });
      await KnowledgeSync.updateOne({ _id: 'website' }, { $set: { leaseUntil: new Date(Date.now() + 30 * 60000) } });
    } });
    for (const failure of crawl.failures) {
      await KnowledgePage.updateOne({ url: failure.url }, { $set: { status: 'failed', lastError: failure.error, lastSeenAt: startedAt, ...([404, 410].includes(failure.status) ? { active: false } : {}) } }, { upsert: true });
      if ([404, 410].includes(failure.status)) await KnowledgeChunk.updateMany({ url: failure.url }, { $set: { active: false } });
    }
    for (const excluded of crawl.excluded) {
      await KnowledgePage.updateOne({ url: excluded.url }, { $set: { active: false, status: 'excluded', lastError: excluded.reason, lastSeenAt: startedAt } }, { upsert: true });
      await KnowledgeChunk.updateMany({ url: excluded.url }, { $set: { active: false } });
    }
    if (!crawl.truncated && !crawl.failures.length) {
      await KnowledgePage.updateMany({ url: { $nin: crawl.discovered } }, { $set: { active: false, status: 'removed' } });
      await KnowledgeChunk.updateMany({ url: { $nin: crawl.discovered } }, { $set: { active: false } });
    }
    Object.assign(stats, { failures: crawl.failures, excluded: crawl.excluded.length, visited: crawl.visited, truncated: crawl.truncated });
    await KnowledgeSync.updateOne({ _id: 'website' }, { $set: { running: false, finishedAt: new Date(), stats } });
    invalidateKnowledgeCache(); console.log('[ai-knowledge] sync complete', stats); return stats;
  } catch (error) {
    await KnowledgeSync.updateOne({ _id: 'website' }, { $set: { running: false, finishedAt: new Date(), lastError: error.code || error.name } });
    invalidateKnowledgeCache(); throw error;
  }
}

const stop = new Set('the a an is are to of in and or for my me i you your what how does do can about please tell more it he she this that hai hain ka ki ke ko me mujhe mera meri kya kaise aur se hain'.split(' '));
export const tokens = (value) => [...new Set((value.toLowerCase().normalize('NFKC').match(/[\p{L}\p{N}]+/gu) || []).filter((word) => word.length > 1 && !stop.has(word)))];
export function rankKnowledge(chunks, query, queryVector) {
  const terms = tokens(query); const total = chunks.length || 1;
  const frequency = new Map(terms.map((term) => [term, chunks.filter((chunk) => `${chunk.title} ${chunk.section} ${chunk.text}`.toLowerCase().includes(term)).length]));
  const scored = chunks.map((chunk) => {
    const body = chunk.text.toLowerCase(); const section = chunk.section.toLowerCase();
    const title = chunk.title.toLowerCase(); const slug = new URL(chunk.url).pathname.toLowerCase();
    let keyword = terms.reduce((score, term) => {
      const count = body.split(term).length - 1;
      const idf = Math.log(1 + total / (1 + frequency.get(term)));
      return score + idf * (count ? count / (count + 0.5 + body.length / 1800) : 0) + (section.includes(term) ? 3 / Math.sqrt(Math.max(1, section.split(' ').length / 5)) : 0) + (title.includes(term) ? 0.5 : 0) + (slug.includes(term) ? 1.5 : 0);
    }, 0);
    if (/\bblog|article\b/i.test(query) && chunk.contentType === 'blog' && terms.some((term) => body.includes(term))) keyword += 6;
    const semantic = queryVector && chunk.embeddingModel === embeddingModel() ? cosine(queryVector, chunk.embedding) : 0;
    return { ...chunk, keyword, semantic, score: 0 };
  });
  // Rank fusion keeps a partially embedded corpus from crowding out exact
  // topic pages and blogs that are waiting for embedding quota.
  scored.filter((chunk) => chunk.keyword > 0).sort((a, b) => b.keyword - a.keyword).forEach((chunk, index) => { chunk.score += 3 / (11 + index); });
  scored.filter((chunk) => chunk.semantic >= 0.58).sort((a, b) => b.semantic - a.semantic).forEach((chunk, index) => { chunk.score += 1 / (11 + index); });
  return scored.filter((chunk) => chunk.score > 0).sort((a, b) => b.score - a.score);
}

export function buildRetrievalQuery(question, conversation) {
  // Recent user turns supply pronouns/age/topic without trusting client-sent history.
  const previous = (conversation.messages || []).filter((message) => message.role === 'user').slice(-3).map((message) => message.text.slice(0, 500));
  const reference = tokens(question).length <= 3 ? conversation.lastAssistantQuestion || '' : '';
  return cleanText([question, reference, ...previous.reverse()].join(' ')).slice(0, 1800);
}

export async function retrieveKnowledge(query) {
  try {
    const vectors = await embedTexts([query], 'RETRIEVAL_QUERY'); const queryVector = vectors?.[0];
    if (!cache || Date.now() - cacheTime > 60000) {
      // Bounded in-process cosine fallback works on MongoDB without Atlas Search.
      cache = await KnowledgeChunk.find({ active: true }).select('url title section text contentType contentHash embedding embeddingModel lastSeenAt').limit(6000).lean().maxTimeMS(5000);
      cacheTime = Date.now();
    }
    let candidates = cache;
    let mode = queryVector ? 'semantic-local-hybrid' : 'keyword';
    if (queryVector && process.env.AI_USE_ATLAS_VECTOR !== 'false') {
      try {
        const semantic = await KnowledgeChunk.aggregate([
          { $vectorSearch: { index: vectorIndexDefinition().name, path: 'embedding', queryVector, numCandidates: 100, limit: 24, filter: { active: true, embeddingModel: embeddingModel() } } },
          { $project: { url: 1, title: 1, section: 1, text: 1, contentType: 1, contentHash: 1, embedding: 1, embeddingModel: 1 } }
        ]).option({ maxTimeMS: 4000 });
        candidates = [...new Map([...semantic, ...cache].map((chunk) => [`${chunk.url}:${chunk.contentHash}`, chunk])).values()]; mode = 'atlas-hybrid';
      } catch { console.warn('[ai-knowledge] Atlas vector index unavailable; using local cosine/hybrid search'); }
    }
    const ranked = rankKnowledge(candidates, query, queryVector); const selected = []; const perPage = new Map(); let length = 0;
    for (const chunk of ranked) {
      if ((perPage.get(chunk.url) || 0) >= 3 || selected.some((entry) => entry.text === chunk.text)) continue;
      if (length + chunk.text.length > 12000 || selected.length >= 8) break;
      perPage.set(chunk.url, (perPage.get(chunk.url) || 0) + 1); length += chunk.text.length;
      selected.push({ id: `S${selected.length + 1}`, url: chunk.url, title: chunk.title, section: chunk.section, text: chunk.text, contentType: chunk.contentType });
    }
    return { chunks: selected, mode };
  } catch (error) {
    console.warn('[ai-knowledge] retrieval unavailable', { code: error.code || error.name });
    return { chunks: [], mode: 'unavailable' };
  }
}

export async function knowledgeStatus() {
  const [sync, pages, chunks, embedded] = await Promise.all([
    KnowledgeSync.findById('website').lean(), KnowledgePage.find().select('-_id -__v').sort({ url: 1 }).limit(500).lean(),
    KnowledgeChunk.countDocuments({ active: true }), KnowledgeChunk.countDocuments({ active: true, embeddingModel: embeddingModel(), 'embedding.767': { $exists: true } })
  ]);
  return { sync, pages, chunks, embedded, embeddingModel: embeddingModel(), dimensions: EMBEDDING_DIMENSIONS };
}

export function startKnowledgeSchedule() {
  const hours = Number(process.env.AI_KNOWLEDGE_SYNC_HOURS || 0);
  if (!(hours >= 1 && hours <= 168)) return;
  const timer = setInterval(() => syncWebsiteKnowledge().catch((error) => console.warn('[ai-knowledge] scheduled sync failed', { code: error.code || error.name })), hours * 3600000);
  timer.unref(); return timer;
}
