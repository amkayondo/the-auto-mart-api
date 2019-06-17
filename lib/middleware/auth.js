"use strict";

var jwt = require('jsonwebtoken');

var dotenv = require('dotenv');

dotenv.config();

var _auth = function _auth(req, res, next) {
  try {
    var _header = req.headers.authorization;

    if (!_header || _header === "") {
      return res.status(401).json({
        status: 401,
        error: "Unauthorized"
      });
    }

    var _token = jwt.verify(_header, process.env.SECRETE_KEY);

    req.user = _token;
    next();
  } catch (_unused) {
    res.status(401).json({
      status: 401,
      error: "Invalid token"
    });
  }
};

module.exports = _auth;