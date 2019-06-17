"use strict";

var flag_db = require('../../models/Flags');

var Joi = require('@hapi/joi');

var uuid = require('uuid');

var schema = {
  reason: Joi.string().min(10).required(),
  description: Joi.string().min(30).required()
};

var post_flag = function post_flag(req, res) {
  var result = Joi.validate(req.body, schema);

  if (result.error) {
    return res.status(400).json({
      status: 400,
      error: result.error.details[0].message
    });
  }

  var new_order = req.body = {
    id: uuid.v4(),
    car_id: uuid.v4(),
    reason: req.body.reason,
    description: req.body.description
  };
  flag_db.push(new_order);
  res.json({
    status: 200,
    message: "Flag posted",
    data: new_order
  });
};

module.exports = post_flag;