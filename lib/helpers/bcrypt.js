"use strict";

var bcrypt = require('bcrypt');

var encrypt = function encrypt(_param, _run) {
  return bcrypt(_param, 10, function (err, hash) {
    if (err) {
      return res.status(500).json({
        error: err
      });
    } else {
      _run;
    }
  });
};

module.exports = encrypt;