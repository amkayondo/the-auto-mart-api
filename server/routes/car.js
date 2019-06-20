import express from 'express';
import Auth from '../middleware/auth';
import createCar from '../controllers/cars/post_car';
import getCarByID from '../controllers/cars/get_car_byId';
import updateCarPrice from '../controllers/cars/update_ car';
import getAllnewUnsoldCars from '../controllers/cars/get_new_unsold_cars';
import getUnsoldCars from '../controllers/cars/get_unsold_cars';

const carRouter = express.Router();

const auth = new Auth();

carRouter.post('/car', auth.auth, createCar);
carRouter.get('/car/:carId', getCarByID);
carRouter.patch('/car/:carId/price', auth.auth, updateCarPrice);
carRouter.get('/car', getAllnewUnsoldCars);
carRouter.get('/car', getUnsoldCars);

export default carRouter;
