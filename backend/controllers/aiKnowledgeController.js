import { knowledgeStatus, syncWebsiteKnowledge } from '../services/aiKnowledgeService.js';

export async function getKnowledgeStatus(req, res) {
  try { res.json({ success: true, data: await knowledgeStatus() }); }
  catch { res.status(503).json({ success: false, message: 'Knowledge storage is unavailable.' }); }
}
export function refreshKnowledge(req, res) {
  // Async sync is observed through GET status; a DB lease prevents concurrent jobs.
  syncWebsiteKnowledge().catch((error) => console.warn('[ai-knowledge] admin sync failed', { code: error.code || error.name }));
  res.status(202).json({ success: true, message: 'Knowledge refresh requested. Check the knowledge status endpoint for progress.' });
}
