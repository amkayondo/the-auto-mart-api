"use strict";

// Flag Model
var flagModel = function flagModel(id, car_id, created_on, reason, description) {
  return {
    id: id,
    car_id: car_id,
    created_on: created_on,
    reason: reason,
    description: description
  };
}; // Flag db


var flag_db = [];
module.exports = flag_db;