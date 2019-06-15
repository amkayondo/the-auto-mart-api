const car_db = require('../../models/Cars');
const uuid = require('uuid');
const Joi = require('@hapi/joi')

   const schema = {
       state: Joi.string().min(3).required(),
       price: Joi.number().integer().min(6).required(),
       manufacturer: Joi.string().min(3).required(),
       model: Joi.string().min(4).required(),
       body_type: Joi.string().min(3).required()

   }


const post_car = (req, res) =>{ 
   const user_id = req.user.id;
    const _result = Joi.validate(req.body, schema)
    if(_result.error){
        return res.status(400).json({
            status: 400,
            error: _result.error.details[0].message 
    })}
    

    const new_data = req.body = 
    {
        id: uuid.v4(),
        owner : user_id, 
        created_on : new Date(),
        state : req.body.state, 
        status : "available",
        price : req.body.price, 
        manufacturer : req.body.manufacturer, 
        model : req.body.model, 
        body_type : req.body.body_type
    }
    car_db.push(new_data);
    res.status(200).json({
        status: 200,
        data: car_db
    })
}

module.exports = post_car;