const car_db = require('../../models/Cars');

 
const update_car_ = (req, res) =>{
    const user_id = req.user.id; 

    
    const found = car_db.findIndex(c => c.id === req.params.id && c.owner === user_id);
    

    if(found){
        car_db[found].price = req.body.price;
        res.status(200).json({
            status: 200,
            data : car_db[found]
        })
    }
    else{
        res.status(400).json({
            error: "not owner"
        })
    }
}

module.exports = update_car_;