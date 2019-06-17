"use strict";

var car_db = require('../../models/Cars');

var get_car_by_id = function get_car_by_id(req, res) {
  var _req = req.params.id;

  var _data = car_db.filter(function (car) {
    return car.id === _req;
  });

  if (_data) {
    if (_data.length == 0) {
      res.status(400).json({
        status: 400,
        error: "No car found with Id ".concat(_req)
      });
    }

    res.status(200).json({
      status: 200,
      data: _data
    });
  } else {
    res.status(400).json({
      status: 400,
      error: "No car found with Id ".concat(_req)
    });
  }
};

module.exports = get_car_by_id;