const car_db = require('../../models/Cars');

 
const update_car_ = (req, res) =>{
    const user_id = req.user.id; 

    
    const found = car_db.find(c => c.id === req.params.id && c.owner === user_id);
    if(found){
        res.status(200).json({
            status: 200,
            data : {
                
            }

        })
    }
    else{
        res.status(400).json({
            error: "not owner"
        })
    }
}

module.exports = update_car_;