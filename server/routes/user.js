import express from 'express';
import createAccount from '../controllers/users/signup';
import loginUser from '../controllers/users/login';

const userRouter = express.Router();

// CAR ROUTES
userRouter.post('/signup', createAccount);
userRouter.post('/login', loginUser);
export default userRouter;
