const order_db = require('../../models/Orders');
const Joi = require('@hapi/joi');

const post_schema = {
    id: Joi.number().integer().min(1).required(),
    car_id: Joi.number().integer().min(1).required(),
    status: Joi.string().min(4).required(),
    price_offered: Joi.number().integer().min(6).required()
}
const postOrder = (req, res) =>{
    const _result = Joi.validate(req.body, schema);
    if(_result.error){
        return res.status(400).json({
            status: 400,
            error: result.error.details[0].message 
    })}

    const new_order = req.body = {
        id: order_db + 1,
        car_id: req.body.car_id,
        created_on: new Date(),
        status: req.body.status,
        price_offered: req.body.price_offered
    }
    order_db.push(new_order)
    res.json({
        status: 200,
        data: order_db
    })

}



module.exports = postOrder;

