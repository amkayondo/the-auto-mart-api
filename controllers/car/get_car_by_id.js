const car_db = require('../../models/Cars');

const get_car_by_id = (req, res) =>{
    const _req = parseInt(req.params.id); 
    const found = car_db.some(
        car => car.id === _req

    );
    
    if (found) {
        const _data = car_db.filter(
            car => car.id === _req)
        res.json({
         status: 200,
         data : _data}   
        );
    } else {
        res.status(400).json (
            {
                status: 400,
                error : `No car found with Id ${_req}` 
            }
        );
    }
}

module.exports = get_car_by_id;