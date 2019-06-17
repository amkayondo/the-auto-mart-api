"use strict";

var userModel = function userModel(id, email, first_name, last_name, password, address, is_admin) {
  return {
    id: id,
    email: email,
    first_name: first_name,
    last_name: last_name,
    password: password,
    address: address,
    is_admin: is_admin
  };
}; // User db


var user_db = [userModel(1, "amkayondo@gmail.com", "kayondo", "ediie", "oadmlad", "kampala", true)];
module.exports = user_db;