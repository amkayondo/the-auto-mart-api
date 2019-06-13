const express = require('express');
const user_router = express.Router();
const userLogin = require('../controllers/user/login');
const userSignup = require('../controllers/user/signup');

user_router.post('/auth/signin', userLogin);
user_router.post('/auth/signup', userSignup);

module.exports = user_router;