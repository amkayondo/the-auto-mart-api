"use strict";

var express = require('express');

var flag_router = express.Router();

var flag_order = require('../controllers/flag/post_flag');

var auth = require('../middleware/auth');

flag_router.post('/flag/', auth, flag_order);
flag_router.get('/flag/', function (req, res) {
  res.status(400).json({
    status: 400,
    massage: "Invalid route"
  });
});
module.exports = flag_router;