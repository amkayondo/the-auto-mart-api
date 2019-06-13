const car_db = require('../../models/Cars');

const delete_car = (req, res) =>{
    const _req = parseInt(req.params.id);
    const find = car => car.id === _req;
    const x = car_db.some(find);
    if (x) {
        const _data = car_db.filter(car => car.id !== _req)
        car_db.pop(_data)
        res.json({
         status: 200,
         message: 'car deleted'
        }   
        );
    } else {
        res.status(400).json({
            status: 400,
            error: `No car with ID ${_req}`
        })
     }
}

module.exports = delete_car;