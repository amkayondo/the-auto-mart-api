const express = require('express');
const car_router = express.Router();
const Car = require('../controllers/car');
const uuid = require('uuid');
const get_unsold_cars = require('../controllers/car')

// GET UNSOLD CARS
car_router.get('/car', get_unsold_cars);

module.exports = car_router;