const flag_db = require('../../models/Flags');
const Joi = require('@hapi/joi');

const schema = {
    car_id: Joi.number().integer().min(1).required(),
    reason: Joi.string().min(10).required(),
    description: Joi.string().min(30).required()
}


const post_flag = (req, res) =>{
    const result = Joi.validate(req.body, schema);
   if(result.error){
       return res.status(400).json({
           status: 400,
           error: result.error.details[0].message
       })
   } 
    const new_order = req.body = {
           id: flag_db.length + 1,
           car_id: req.body.car_id,
           reason: req.body.reason,
           description: req.body.description
            }
    flag_db.push(new_order)
    res.json({
           status: 200,
           message: "Flag posted",
           data: new_order
    })
    
   
}

module.exports = post_flag;