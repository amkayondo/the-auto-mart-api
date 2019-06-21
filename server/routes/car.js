import express from 'express';
import Auth from '../middleware/auth';
import createCar from '../controllers/cars/post_car';
import getCarByID from '../controllers/cars/get_car_byId';
import updateCarPrice from '../controllers/cars/update_car';
import getAllnewUnsoldCars from '../controllers/cars/get_new_unsold_cars';
import getUnsoldCars from '../controllers/cars/get_unsold_cars';
import updateCarStatus from '../controllers/cars/update_status';


const carRouter = express.Router();

const auth = new Auth();

carRouter.post('/car', auth.auth, createCar);
carRouter.get('/car/:carId', getCarByID);
carRouter.patch('/car/:carId/price', auth.auth, updateCarPrice);
carRouter.get('/car', getAllnewUnsoldCars);
carRouter.get('/car', getUnsoldCars);
carRouter.patch('/car/:carId/status', auth.auth, updateCarStatus);

export default carRouter;
