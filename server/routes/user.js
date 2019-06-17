import express from 'express';
import createAccount from '../controllers/users/signup';

const carRouter = express.Router();

// CAR ROUTES
carRouter.post('/user', createAccount);

export default carRouter;
