import express from 'express';
import Auth from '../middleware/auth';
import createCar from '../controllers/cars/post_car';

const carRouter = express.Router();

const auth = new Auth();

carRouter.post('/car', auth.auth, createCar);

export default carRouter;
