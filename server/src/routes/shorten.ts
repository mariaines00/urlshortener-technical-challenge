import { Router } from 'express';
import { shortenURL } from '../controllers/shorten';

const router = Router();

router.post('/', shortenURL);

export default router;
