const car_db = require('../../models/Cars');

const get_all_cars = (req, res) =>{
    if(car_db.length >=1){
        res.status(200).json({
            status: 200,
            data: car_db
        });
    } else {
       res.status(401).json({ 
        status: 401,
        data : "No Cars available at the moment"
    })
    }
}

module.exports = get_all_cars;