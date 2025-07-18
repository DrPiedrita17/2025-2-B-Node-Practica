import express from 'express';
import { logger } from '../middlewares/logger.js';
import { addUser, getUsers } from '../../../semana4/src/controllers/usersController';

const router = express.Router();

router.get('/:users', logger, getUsers);
router.post('/:users', logger, addUser);

export default router;