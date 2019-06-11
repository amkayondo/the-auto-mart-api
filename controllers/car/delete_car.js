const car_db = require('../../models/Cars');

const delete_car = (req, res) =>{
    const _req = parseInt(req.params.id);
    const find = car => car.id === _req;
    const x = car_db.some(find);
    if (x) {
        const _data = car_db.filter(car => car.id !== _req)
        res.json({
         status: 200,
         message: 'car deleted',
         data : _data
        }   
        );
    } else {

     }
}

module.exports = delete_car;