const order_db = require('../../models/Orders');
const Joi = require('@hapi/joi');
const uuid = require('uuid');

const post_schema = {
    price_offered: Joi.number().integer().min(6).required()
}
const postOrder = (req, res) =>{
    const user_id = req.user.id; 
    const _result = Joi.validate(req.body, post_schema);
    if(_result.error){
        return res.status(400).json({
            status: 400,
            error: _result.error.details[0].message 
    })}

    const new_order = req.body = {
        id: uuid.v4(),
        buyer: user_id,
        car_id: uuid.v4(),
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

