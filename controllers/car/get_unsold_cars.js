const car_db = require('../../models/Cars');

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
        error: "You are not authorized to access this resource"
    
    })
}

module.exports = get_unsold_cars;