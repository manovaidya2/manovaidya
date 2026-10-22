import mongoose from 'mongoose';

const pageSchema = new mongoose.Schema({
  url: { type: String, required: true, unique: true }, title: String, contentHash: String,
  active: { type: Boolean, default: true }, status: String, lastError: String,
  lastSeenAt: Date, lastSuccessAt: Date, chunkCount: Number
}, { timestamps: true });
const chunkSchema = new mongoose.Schema({
  url: { type: String, required: true, index: true }, title: String, section: String,
  contentType: String, text: String, position: Number, contentHash: String,
  active: { type: Boolean, default: true, index: true },
  embedding: { type: [Number], default: undefined }, embeddingModel: String,
  embeddedAt: Date, lastSeenAt: Date
}, { timestamps: true });
chunkSchema.index({ url: 1, contentHash: 1 }, { unique: true });
chunkSchema.index({ title: 'text', section: 'text', text: 'text' }, { weights: { title: 5, section: 3, text: 1 }, default_language: 'none' });
const syncSchema = new mongoose.Schema({
  _id: { type: String, default: 'website' }, running: Boolean, leaseUntil: Date,
  startedAt: Date, finishedAt: Date, stats: mongoose.Schema.Types.Mixed, lastError: String
}, { versionKey: false });
export const KnowledgePage = mongoose.model('AiKnowledgePage', pageSchema, 'ai_knowledge_pages');
export const KnowledgeChunk = mongoose.model('AiKnowledgeChunk', chunkSchema, 'ai_knowledge_chunks');
export const KnowledgeSync = mongoose.model('AiKnowledgeSync', syncSchema, 'ai_knowledge_sync');
