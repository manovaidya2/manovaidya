import express from 'express';
import * as aiChatController from '../controllers/aiChatController.js';
import { createChatRateLimit, requireKnowledgeAdmin } from '../middleware/aiChatGuards.js';
import { getKnowledgeStatus, refreshKnowledge } from '../controllers/aiKnowledgeController.js';

const router = express.Router();

router.get('/ai-chat/status', aiChatController.getAiChatStatus);
router.post('/ai-chat', createChatRateLimit(), aiChatController.askAiChat);
router.get('/ai-chat/knowledge', requireKnowledgeAdmin, getKnowledgeStatus);
router.post('/ai-chat/knowledge/sync', requireKnowledgeAdmin, createChatRateLimit({ limit: 2, windowMs: 60000 }), refreshKnowledge);
router.post('/ai-chat/availability', aiChatController.checkAiChatConsultationAvailability);
router.post('/ai-chat/conversation-details', aiChatController.syncAiChatConversationDetails);

export default router;
