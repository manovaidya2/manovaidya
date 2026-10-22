import 'dotenv/config';
import mongoose from 'mongoose';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import { createAnswerService } from '../services/aiChatService.js';
import { createConversationId } from '../services/aiConversationService.js';
import { KnowledgeChunk } from '../models/AiKnowledge.js';
import { cleanText } from '../services/aiKnowledgeContent.js';

// Real retrieval/provider smoke test; synthetic conversations stay in memory.
const sessions = new Map();
const answer = createAnswerService({
  loadConversation: async (id) => {
    id ||= createConversationId();
    if (!sessions.has(id)) sessions.set(id, { conversationId: id, messages: [], patients: [], user: {}, consultation: {}, pendingAction: 'NONE', conversationStage: 'DISCOVERY' });
    return sessions.get(id);
  },
  saveConversationTurn: async (session, turn) => {
    session.messages.push({ role: 'user', text: turn.question }, { role: 'assistant', text: turn.answer });
    session.currentTopic = turn.currentTopic; session.pendingAction = turn.pendingAction;
    session.lastAssistantQuestion = turn.answer.match(/[^?\n]+\?/g)?.at(-1) || '';
    session.patients = turn.state.patients; session.activePatientId = turn.state.activePatientId; session.conversationStage = turn.state.stage;
  }
});
const scenarios = [
  ['How does Neuro-Ayurveda help?'], ['What is ADHD?'], ['What is your consultation fee?'],
  ['Can I book an online consultation?'], ['My child is not speaking properly.', 'He is 3 years old.', 'yes'],
  ['मुझे तनाव और नींद की समस्या है। आप कैसे मदद करते हैं?'],
  ['mere bachche ko speech delay hai, kya karna chahiye?'],
  ['What does your blog say about autism and ADHD together?'],
  ['How are stress, digestion and sleep connected?'],
  ['Do you offer quantum spaceship surgery?']
];
const results = [];
try {
  await mongoose.connect(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 10000 });
  await fs.mkdir('.cache', { recursive: true });
  for (const sequence of scenarios) {
    let conversationId;
    for (const question of sequence) {
      const start = Date.now(); const result = await answer({ question, conversationId }); conversationId = result.conversationId;
      assert.doesNotMatch(result.answer, /Main Manovaidya ke services, symptoms, consultation/);
      assert.equal(result.action, 'NONE', 'Informational questions must not trigger booking');
      for (const source of result.sources) {
        if (source.contentType === 'configured-business') continue;
        const stored = await KnowledgeChunk.find({ url: source.url, active: true }).select('text').lean();
        const quote = source.quote.replace(/…$/, '');
        assert.ok(stored.some((chunk) => cleanText(chunk.text).toLowerCase().includes(cleanText(quote).toLowerCase())), 'Source evidence must exist in actual indexed content');
      }
      const entry = { question, answer: result.answer, model: result.model, degraded: result.degraded, answerType: result.answerType, retrievalMode: result.retrievalMode, sources: result.sources, milliseconds: Date.now() - start };
      results.push(entry); console.log(JSON.stringify(entry));
      await fs.writeFile('.cache/chatbot-live-smoke.json', JSON.stringify({ checkedAt: new Date().toISOString(), results }, null, 2));
    }
  }
  console.log(`Checked ${results.length} real-provider turns. Generated: ${results.filter((result) => !result.degraded).length}; degraded: ${results.filter((result) => result.degraded).length}.`);
} catch (error) { console.error('Live chat verification failed:', error.code || error.name, error.code === 'ERR_ASSERTION' ? error.message : ''); process.exitCode = 1; }
finally { await mongoose.disconnect(); }
