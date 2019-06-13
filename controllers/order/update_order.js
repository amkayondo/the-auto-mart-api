const order_db = require('../../models/Orders');

const postOrder = (req, res) =>{
    // validate
   const _order = parseInt(req.params.order_id);
   const got_order = order_db.some(x => x.id === _order);
   if(got_order){
       const updOrder = req.body;
       order_db.forEach(order => {
           if(order.id === _order){
               order.price = req.body.price = updOrder.price
               ? updOrder.price : order.price
            
                res.json({
                    status: 200,
                    message: "Order price updated",
                    data: order
                })
            }

       })
   } else {
       res.json({
           status: 400,
           error : `No order with id ${_order}`
       })
   }

}



module.exports = postOrder;

