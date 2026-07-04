import express from 'express';
import * as blogController from '../controllers/blogController.js';
import * as seoIntegrationController from '../controllers/seoIntegrationController.js';
import { upload } from '../middleware/upload.js';

const router = express.Router();

// Blog routes
router.post('/blogs', upload.single('image'), blogController.createBlog);
router.get('/blogs', blogController.getAllBlogs);
router.get('/seo/integrations/status', seoIntegrationController.getSeoIntegrationStatus);
router.get('/blogs/:id/search-console', seoIntegrationController.getBlogSearchPerformance);
router.post('/blogs/:id/gemini-seo-review', seoIntegrationController.getBlogGeminiSeoReview);
router.get('/blogs/search', blogController.searchBlogs);
router.get('/blogs/category/:category', blogController.getBlogsByCategory);
router.get('/blogs/slug/:slug', blogController.getBlogBySlug);
router.get('/blogs/:id', blogController.getBlogById);
router.put('/blogs/:id', upload.single('image'), blogController.updateBlog);
router.delete('/blogs/:id', blogController.deleteBlog);


export default router;
