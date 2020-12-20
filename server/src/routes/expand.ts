import { Router } from 'express';
import { expandURL } from '../controllers/expand';

const router = Router();

router.get('/', expandURL);

export default router;
