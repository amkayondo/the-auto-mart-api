const car_db = require('../../models/Cars');

const get_unsold_cars = (req, res)=>{
    
    if(req.query.status === "available"){
        const car_x = car_db.filter(
            car => car.status === req.query.status
            );

        res.json({
            status: 200,
            data: req.query.status
        })

    } else res.json({
        status: 400,
        error: "You are not authorized to access this resource"
    
    })
} 

module.exports = get_unsold_cars;