import { GoogleGenAI } from '@google/genai';

export const EMBEDDING_DIMENSIONS = 768;
export const embeddingModel = () => process.env.GEMINI_EMBEDDING_MODEL || 'gemini-embedding-001';
let verified = ''; let blockedUntil = 0;
export async function embedTexts(texts, taskType = 'RETRIEVAL_DOCUMENT') {
  if (!process.env.GEMINI_API_KEY || Date.now() < blockedUntil) return null;
  const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY, httpOptions: { timeout: 10000 } });
  const model = embeddingModel();
  try {
    if (verified !== model) {
      const info = await client.models.get({ model });
      if (!info.supportedActions?.includes('embedContent')) throw new Error('UNSUPPORTED_EMBEDDING_MODEL');
      verified = model;
    }
    const response = await client.models.embedContent({ model, contents: texts, config: { taskType, outputDimensionality: EMBEDDING_DIMENSIONS } });
    const vectors = response.embeddings?.map((entry) => entry.values);
    if (vectors?.length !== texts.length || vectors.some((values) => values?.length !== EMBEDDING_DIMENSIONS || values.some((value) => !Number.isFinite(value)))) throw new Error('INVALID_EMBEDDING');
    return vectors;
  } catch (error) {
    blockedUntil = Date.now() + 60000;
    console.warn('[ai-knowledge] embedding unavailable; using keyword retrieval', { code: error.status || error.code || error.name });
    return null;
  }
}

export function cosine(a, b) {
  if (!a?.length || a.length !== b?.length) return 0;
  let dot = 0; let aa = 0; let bb = 0;
  for (let i = 0; i < a.length; i++) { dot += a[i] * b[i]; aa += a[i] ** 2; bb += b[i] ** 2; }
  return dot / (Math.sqrt(aa * bb) || 1);
}
