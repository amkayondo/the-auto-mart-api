"use strict";

var car_db = require('../../models/Cars');

var update_car_ = function update_car_(req, res) {
  var user_id = req.user.id;
  var found = car_db.find(function (c) {
    return c.id === req.params.id && c.owner === user_id;
  });

  if (found) {
    res.status(200).json({
      status: 200,
      data: {}
    });
  } else {
    res.status(400).json({
      error: "not owner"
    });
  }
};

module.exports = update_car_;