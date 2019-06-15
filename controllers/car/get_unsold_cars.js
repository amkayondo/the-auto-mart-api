const car_db = require('../../models/Cars');

const get_unsold_cars = (req, res)=>{
    // get status value from user
    const x = (req.query.status);
    // if not status
    if(x === "available" ){
        
        const car_x = car_db.filter(car => car.status === x);
        res.status(200).json({
            
            status: 200,
            data: car_x
        })

    } else resstatus(400).json({
        status: 400,
        message: "You are not authorized to access this route"
    })
}
module.exports =  get_unsold_cars;