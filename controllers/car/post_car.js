const car_db = require('../../models/Cars');
const carModel = require('../../models/app');

const post_car = (req, res) =>{
    const new_data = req.body = 
    {
        id: req.body.id,
        owner : req.body.owner, 
        created_on : new Date(),
        state : req.body.state, 
        status : req.body.status,
        price : req.body.price, 
        manufacturer : req.body.manufacturer, 
        model : req.body.model, 
        body_type : req.body.body_type
    }
    car_db.push(new_data);
    res.json(car_db)
}

module.exports = post_car;