"use strict";

var carModel = function carModel(id, owner, created_on, state, status, price, manufacturer, model, body_type) {
  return {
    id: id,
    owner: owner,
    created_on: created_on,
    state: state,
    status: status,
    price: price,
    manufacturer: manufacturer,
    model: model,
    body_type: body_type
  };
};

var cars = [];
module.exports = cars;