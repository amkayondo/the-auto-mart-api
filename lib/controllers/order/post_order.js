"use strict";

var order_db = require('../../models/Orders');

var Joi = require('@hapi/joi');

var uuid = require('uuid');

var post_schema = {
  price_offered: Joi.number().integer().min(6).required()
};

var postOrder = function postOrder(req, res) {
  var user_id = req.user.id;

  var _result = Joi.validate(req.body, post_schema);

  if (_result.error) {
    return res.status(400).json({
      status: 400,
      error: _result.error.details[0].message
    });
  }

  var new_order = req.body = {
    id: uuid.v4(),
    buyer: user_id,
    car_id: uuid.v4(),
    created_on: new Date(),
    status: "pending",
    price: 120000,
    price_offered: req.body.price_offered
  };
  order_db.push(new_order);
  res.json({
    status: 200,
    data: order_db
  });
};

module.exports = postOrder;