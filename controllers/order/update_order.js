const order_db = require('../../models/Orders');

const postOrder = (req, res) =>{
    // validate
   const _order = parseInt(req.params.order_id);
   const got_order = order_db.some(x => x.id === _order);
   if(got_order){
       
   }

}



module.exports = postOrder;

