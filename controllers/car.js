const car_db = require('../models/Cars');
const find_item_by_id = require('../helpers/find_item');
const Validator = require('../middleware/validator');
const carModel = require('../models/app');

const get_unsold_cars = (req, res)=>{
    
    // get status value from user
    const x = (req.query.status);
    
    // if not status
    if(x === "available" ){
        const car_x = car_db.filter(
            car => car.status === x
            );

        res.json({
            status: 200,
            data: car_x
        })

    } else res.json({
        status: 400,
        message: "You are not authorized to access this route"
    
    })
}

const get_car_by_ID = (req, res) =>{
    const _id = parseInt(req.params.id);
    
    const found = car_db.some(
       car.id === _id
   )

   if(found) { 
       res.json(
        car = car_db.filter(
            car => car.status === x
            )
       )
   }
  
}

module.exports = {
    
    get_unsold_cars, 
    get_car_by_ID
    
    };