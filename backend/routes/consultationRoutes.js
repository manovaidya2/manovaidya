import express from 'express';
import * as consultationController from '../controllers/consultationController.js';

const router = express.Router();

router.post('/consultations', consultationController.createConsultation);
router.get('/consultations', consultationController.getAllConsultations);
router.post('/consultations/kraya-sync', consultationController.sendConsultationsToKraya);
router.patch('/consultations/:id/status', consultationController.updateConsultationStatus);
router.delete('/consultations/:id', consultationController.deleteConsultation);

export default router;
