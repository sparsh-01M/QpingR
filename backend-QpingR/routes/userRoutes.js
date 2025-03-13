// routes/userRoutes.js
import express from 'express';
import { googleAuth } from '../controllers/userController.js'; // Adjust path if needed

const router = express.Router();

router.post('/auth/google', googleAuth);

export default router;