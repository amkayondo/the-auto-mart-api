const car_db = require('../../models/Cars');

const get_car_by_id = (req, res) =>{
    const _req = req.params.id; 

    const _data = car_db.filter( car => car.id === _req)
        
 
    if (_data){
        if(_data.length == 0){
            res.status(400).json({
                status: 400,
                error : `No car found with Id ${_req}`
               });
        }
        res.status(200).json({
            status: 200,
            data : _data
           });
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

