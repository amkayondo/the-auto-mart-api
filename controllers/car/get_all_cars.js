const car_db = require('../../models/Cars');

const get_all_cars = (req, res) =>{
    if(car_db.length >=1){
        res.json({
            status: 200,
            data: car_db
        });
    } else {
       res.json({ 
        status: 400,
        data : "No Cars available at the moment"
    })
    }
}

module.exports = get_all_cars;