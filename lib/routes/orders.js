"use strict";

var express = require('express');

var order_router = express.Router();

var post_order = require('../controllers/order/post_order');

var update_order = require('../controllers/order/update_order');

var auth = require('../middleware/auth');

order_router.post('/order', auth, post_order);
order_router.patch('/order/<:order-id>/price', auth, update_order);
module.exports = order_router;