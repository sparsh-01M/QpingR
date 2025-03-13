// backend/routes/siteContentRoutes.js
import express from 'express';
import { getSiteContent, addSiteContent } from '../controllers/siteContentController.js';

const router = express.Router();

// GET /api/site-content - Fetch site content
router.get('/', getSiteContent);

// POST /api/site-content - Add site content (for setup)
router.post('/', addSiteContent);

export default router;