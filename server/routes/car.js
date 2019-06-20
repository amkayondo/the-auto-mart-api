import express from 'express';
import Auth from '../middleware/auth';
import createCar from '../controllers/cars/post_car';
import getCarByID from '../controllers/cars/get_car_byId';

const carRouter = express.Router();

const auth = new Auth();

carRouter.post('/car', auth.auth, createCar);
carRouter.get('/car/:carId', getCarByID);

export default carRouter;
