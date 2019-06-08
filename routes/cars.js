const express = require('express');
const car_router = express.Router();
const uuid = require('uuid');
const car_db = require('../models/Cars');
const AppController = require('../controllers/app');

// GET ALL CARS
car_router.get('/car', (req, res)=>res.json({status: 200,data : car_db}));

// GET ONE CAR
car_router.get('/car/:id', (req, res)=>{
    const found = car_db.some(car => car.id === parseInt(req.params.id));
    if(found){
        res.json(car_db.filter(car => car.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({
            message: "car not found"
        });
    }
  
});

// GET UNSOLD CARS
car_router.get('/car?status=available', (req, res)=>{
    const found = car_db.some(car => car.status === toString(req.query).toLowerCase);
    if(found){
        res.json(car_db.filter(car => car.status === toString(req.query).toLowerCase));
    } else {
        res.status(400).json({
            message: "car not found"
        });
    }
  
});

module.exports = car_router;