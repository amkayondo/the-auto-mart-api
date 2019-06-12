const express = require('express');
const order_router = express.Router();
const post_order = require('../controllers/order/post_order');
const update_order = require('../controllers/order/update_order');

order_router.post('/order', post_order);
order_router.patch('/order/<:order-id>/price', update_order);

module.exports = order_router; 