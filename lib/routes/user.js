"use strict";

var express = require('express');

var user_router = express.Router();

var userLogin = require('../controllers/user/login');

var userSignup = require('../controllers/user/signup');

user_router.post('/auth/signin', userLogin);
user_router.post('/auth/signup', userSignup);
module.exports = user_router;