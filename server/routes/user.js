import express from 'express';
import createAccount from '../controllers/users/signup';

const userRouter = express.Router();

// CAR ROUTES
userRouter.post('/signup', createAccount);

export default userRouter;
