"use strict";

var express = require('express');

var car_router = express.Router();

var get_unsold_cars = require('../controllers/car/get_unsold_cars');

var get_car_by_ID = require('../controllers/car/get_car_by_id');

var post_car = require('../controllers/car/post_car');

var update_car = require('../controllers/car/update_car');

var delete_car = require('../controllers/car/delete_car');

var auth = require('../middleware/auth');

var _admin = require('../middleware/admin');

var get_all_cars = require('../controllers/car/get_all_cars'); // GET UNSOLD CARS


car_router.get('/car', auth, _admin, get_all_cars);
car_router.get('/car', get_unsold_cars);
car_router.get('/car/:id', get_car_by_ID);
car_router.post('/car', auth, post_car);
car_router.patch('/car/:id', auth, update_car);
car_router["delete"]('/car/:id', auth, delete_car);
module.exports = car_router;