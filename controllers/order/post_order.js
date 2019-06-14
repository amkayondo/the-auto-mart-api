const order_db = require('../../models/Orders');
const Joi = require('@hapi/joi');



const post_schema = {
    car_id: Joi.number().integer().min(1).required(),
    price_offered: Joi.number().integer().min(6).required()
}
const postOrder = (req, res) =>{
    const _result = Joi.validate(req.body, post_schema);
    if(_result.error){
        return res.status(400).json({
            status: 400,
            error: _result.error.details[0].message 
    })}

    const new_order = req.body = {
        id: order_db.length + 1,
        car_id: req.body.car_id,
        created_on: new Date(),
        status: "pending",
        price: 120000,
        price_offered: req.body.price_offered
    }
    order_db.push(new_order)
    res.json({
        status: 200,
        data: order_db
    })

}



module.exports = postOrder;

