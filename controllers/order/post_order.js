const order_db = require('../../models/Orders');

const postOrder = (req, res) =>{
    // validate
    const new_order = req.body = {
        id: req.body.id,
        car_id: req.body.car_id,
        status: req.body.status,
        old_price_offered: req.body.old_price_offered,
        new_price_offered: req.body.new_price_offered
    }
    order_db.push(new_order)
    res.json({
        status: 200,
        data: order_db
    })

}



module.exports = postOrder;

