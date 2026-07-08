import express from 'express';
import * as liveChatController from '../controllers/liveChatController.js';

const router = express.Router();

router.post('/live-chat/sessions', liveChatController.createLiveChatSession);
router.get('/live-chat/sessions/:id', liveChatController.getLiveChatSession);
router.post('/live-chat/sessions/:id/messages', liveChatController.addVisitorMessage);

router.get('/live-chat/admin/sessions', liveChatController.getAdminLiveChatSessions);
router.post('/live-chat/admin/sessions/:id/messages', liveChatController.addAgentMessage);
router.patch('/live-chat/admin/sessions/:id/status', liveChatController.updateLiveChatStatus);
router.patch('/live-chat/admin/sessions/:id/read', liveChatController.markAdminRead);

export default router;
