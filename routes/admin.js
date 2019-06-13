const express = require('express');
const admin_router = express.Router();
const get_all_cars = require('../controllers/car/get_all_cars');

admin_router.get('/car', get_all_cars);



module.exports = admin_router;