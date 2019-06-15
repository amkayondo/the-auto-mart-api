const express = require('express');
const order_router = express.Router();
const post_order = require('../controllers/order/post_order');
const update_order = require('../controllers/order/update_order');
const auth = require('../middleware/auth')

order_router.post('/order', auth, post_order);
order_router.patch('/order/<:order-id>/price', auth, update_order);

module.exports = order_router; 