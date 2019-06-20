import express from 'express';
import Auth from '../middleware/auth';
import createCar from '../controllers/cars/post_car';
import getCarByID from '../controllers/cars/get_car_byId';
import updateCarStatus from '../controllers/cars/update_ car';
import getAllnewUnsoldCars from '../controllers/cars/get_new_unsold_cars';

const carRouter = express.Router();

const auth = new Auth();

carRouter.post('/car', auth.auth, createCar);
carRouter.get('/car/:carId', getCarByID);
carRouter.patch('/car/:carId/status', auth.auth, updateCarStatus);
carRouter.get('/car', getAllnewUnsoldCars);


export default carRouter;
