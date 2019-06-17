"use strict";

var car_db = require('../../models/Cars');

var delete_car = function delete_car(req, res) {
  var user_id = req.user.id;
  var x = car_db.find(function (c) {
    return c.id === req.params.id && c.owner === user_id;
  });

  var _y = car_db.find(function (c) {
    return c.id === req.params.id;
  });

  if (x) {
    car_db.pop(_y);
    res.status(200).json({
      status: 200,
      message: 'car deleted'
    });
  } else {
    res.status(400).json({
      status: 400,
      error: "No car with ID ".concat(req.params.id)
    });
  }
};

module.exports = delete_car;