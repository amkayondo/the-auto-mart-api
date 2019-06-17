"use strict";

var bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');

var dotenv = require('dotenv');

var uuid = require('uuid');

var user_db = require('../../models/Users');

dotenv.config();

var userSignup = function userSignup(req, res) {
  bcrypt.hash(req.body.password, 10, function (err, hash) {
    if (err) {
      res.status(500).json({
        error: err
      });
    } else {
      var new_user = req.body = {
        id: uuid.v4(),
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: hash,
        admin: false
      };
      var payload = {
        id: uuid.v4(),
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        admin: false
      };
      var token = jwt.sign(payload, process.env.SECRETE_KEY, {
        expiresIn: '24hrs'
      });
      res.header('auth-token', token);
      user_db.push(new_user);
      res.json({
        token: token,
        status: 200,
        data: new_user,
        rek: user_db
      });
    }
  });
};

module.exports = userSignup;