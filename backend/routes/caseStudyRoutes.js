import express from 'express';
import * as caseStudyController from '../controllers/caseStudyController.js';
import { upload } from '../middleware/upload.js';

const router = express.Router();

router.post('/case-studies', upload.single('image'), caseStudyController.createCaseStudy);
router.get('/case-studies', caseStudyController.getAllCaseStudies);
router.get('/case-studies/slug/:slug', caseStudyController.getCaseStudyBySlug);
router.get('/case-studies/:id', caseStudyController.getCaseStudyById);
router.put('/case-studies/:id', upload.single('image'), caseStudyController.updateCaseStudy);
router.delete('/case-studies/:id', caseStudyController.deleteCaseStudy);

export default router;
