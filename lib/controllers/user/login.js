"use strict";

var bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');

var dotenv = require('dotenv');

var uuid = require('uuid');

var user_db = require('../../models/Users');

var userLogin = function userLogin(req, res) {
  // validate

  /*  const user_data  = {
       'email': req.body.email,
       'password': req.body.password  
   } */
  // check if user exists
  var x_user = user_db.find(function (x) {
    return x.email === req.body.email;
  });

  if (x_user) {
    // varify password
    console.log(x_user.password);
    console.log(user_db.password);
    var x_password = bcrypt.compare(x_user.password, user_db.password);
    if (!x_password) return res.status(401).json('Incorrect Password'); // get token

    var token = jwt.sign({
      email: x_user.email
    }, process.env.SECRETE_KEY);
    res.header('auth', token).json({
      status: 200,
      message: 'You are successfully loggedin',
      token: token,
      data: x_user
    });
  }
};

module.exports = userLogin;