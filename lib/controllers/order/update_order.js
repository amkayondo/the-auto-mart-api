"use strict";

var order_db = require('../../models/Orders');

var postOrder = function postOrder(req, res) {
  var user_id = req.user.id;

  var _order = parseInt(req.params.order_id);

  var found = order_db.find(function (c) {
    return c.id === req.params.id && c.owner === user_id;
  });
  var got_order = order_db.find(function (x) {
    return x.id === _order;
  });

  if (got_order) {
    var updOrder = req.body;
    order_db.forEach(function (order) {
      if (order.id === _order) {
        order.price = req.body.new_price_offered = updOrder.price_offered ? updOrder.price_offered : order.price_offered;
        res.json({
          status: 200,
          message: "Order price updated",
          data: order
        });
      }
    });
  } else {
    res.json({
      status: 400,
      error: "No order with id ".concat(_order)
    });
  }
};

module.exports = postOrder;