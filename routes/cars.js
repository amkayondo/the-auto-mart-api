const express = require('express');
const car_router = express.Router();
const get_unsold_cars = require('../controllers/car/get_unsold_cars');
const   get_car_by_ID = require('../controllers/car/get_car_by_id');
// GET UNSOLD CARS
car_router.get('/car', get_unsold_cars);
car_router.get('/car/:id',   get_car_by_ID);

module.exports = car_router;