import express from 'express';
import * as videoController from '../controllers/videoController.js';

const router = express.Router();

router.post('/videos', videoController.createVideo);
router.get('/videos', videoController.getAllVideos);
router.get('/videos/:id', videoController.getVideoById);
router.put('/videos/:id', videoController.updateVideo);
router.delete('/videos/:id', videoController.deleteVideo);

export default router;
