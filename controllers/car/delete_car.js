const car_db = require('../../models/Cars');

const delete_car = (req, res) =>{
    const user_id = req.user.id;
    const x = car_db.find(c => c.id === req.params.id && c.owner === user_id);
    const _y = car_db.find(c => c.id === req.params.id )
    if (x) {
        car_db.pop(_y)
        res.status(200).json({
         status: 200,
         message: 'car deleted'
        }   
        );
    } else {
        res.status(400).json({
            status: 400,
            error: `No car with ID ${req.params.id}`
        })
     }
}

module.exports = delete_car;