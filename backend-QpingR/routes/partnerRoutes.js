import express from 'express';
import { getPartners, addPartner } from '../controllers/partnerController.js';

const router = express.Router();

// GET /api/partners - Fetch all partners
router.get('/', getPartners);

// POST /api/partners - Add a new partner (for testing)
router.post('/', addPartner);

export default router;