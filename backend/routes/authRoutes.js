import express from 'express';
import { register, login, verifyCode, getProfile } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/verify', verifyCode);
router.get('/profile', getProfile);

export default router;