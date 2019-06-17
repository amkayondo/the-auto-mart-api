"use strict";

// Order Model
var orderModel = function orderModel(id, car_id, created_on, status, price, price_offered) {
  return {
    id: id,
    car_id: car_id,
    created_on: created_on,
    status: status,
    price: price,
    price_offered: price_offered
  };
}; // Order list


var order_db = [];
module.exports = order_db;