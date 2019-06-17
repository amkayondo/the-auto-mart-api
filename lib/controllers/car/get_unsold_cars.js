"use strict";

var car_db = require('../../models/Cars');

var get_unsold_cars = function get_unsold_cars(req, res) {
  // get status value from user
  var x = req.query.status; // if not status

  if (x === "available") {
    var car_x = car_db.filter(function (car) {
      return car.status === x;
    });
    res.status(200).json({
      status: 200,
      data: car_x
    });
  } else resstatus(400).json({
    status: 400,
    message: "You are not authorized to access this route"
  });
};

module.exports = get_unsold_cars;