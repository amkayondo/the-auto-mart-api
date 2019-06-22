import express from 'express';
import Auth from '../middleware/auth';

import postFlag from '../controllers/flags/flag';

const flagRouter = express.Router();

const auth = new Auth();

flagRouter.get('/flag', auth.auth, postFlag);

export default flagRouter;
