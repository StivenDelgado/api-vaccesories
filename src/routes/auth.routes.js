import { Router } from 'express';
import { 
    login, 
    logout, 
    profile, 
    register 
} from '../controllers/auth.controller.js'; 
import { authRequired } from '../middlewares/validateToken.js';

export const router = Router()

router.post('/login', login)
router.post('/register', register)
router.post('/logout', logout)
router.get('/profile', authRequired , profile)

export default router
