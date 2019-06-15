const express = require('express');
const car_router = express.Router();
const get_unsold_cars = require('../controllers/car/get_unsold_cars');
const   get_car_by_ID = require('../controllers/car/get_car_by_id');
const   post_car = require('../controllers/car/post_car');
const   update_car = require('../controllers/car/update_car');
const delete_car = require('../controllers/car/delete_car');
const auth = require('../middleware/auth');
const _admin = require('../middleware/admin');
const get_all_cars = require('../controllers/car/get_all_cars');

// GET UNSOLD CARS
car_router.get('/admin/car', auth, get_all_cars);
car_router.get('/car', get_unsold_cars);
car_router.get('/car/:id',   get_car_by_ID);
car_router.post('/car', auth, post_car);
car_router.patch('/car/:id/price',  auth, update_car);
car_router.delete('/car/:id', auth, delete_car);


module.exports = car_router;