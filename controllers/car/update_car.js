const car_db = require('../../models/Cars');

const update_car_ = (req, res) =>{
    const car = x => x.id === parseInt(req.params.id);
    const found = car_db.some(car);
    if(found){
        const update_ = req.body;
        car_db.forEach(c => {
            if(car){
                
            }
        })
    }
}