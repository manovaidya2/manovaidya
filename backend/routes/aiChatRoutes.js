import express from 'express';
import * as aiChatController from '../controllers/aiChatController.js';

const router = express.Router();

router.get('/ai-chat/status', aiChatController.getAiChatStatus);
router.post('/ai-chat', aiChatController.askAiChat);

export default router;
