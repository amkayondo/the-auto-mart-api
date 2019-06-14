const order_db = require('../../models/Orders');

const postOrder = (req, res) =>{
   const user_id = req.user.id; 
   const _order = parseInt(req.params.order_id);

   const found = order_db.find(c => c.id === req.params.id && c.owner === user_id);

   const got_order = order_db.find(x => x.id === _order);
   if(got_order){ 
       const updOrder = req.body; 
       order_db.forEach(order => {
           if(order.id === _order){
               order.price = req.body.new_price_offered = updOrder.price_offered
               ? updOrder.price_offered : order.price_offered
            
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
