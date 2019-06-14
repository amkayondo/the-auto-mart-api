const car_db = require('../../models/Users');
const encrypt = require('../../helpers/bcrypt');

const userSignup = (req, res) =>{
    encrypt(req.body.password, user) 
    const user = req.body = {
        id: user_db.length + 1,
        email : req.body.email,
        first_name: req.body.first_name,
        last_name : req.body.last_name,
        password : req.body.password,
        address : req.body.address,
        is_admin : false 
    }

}



module.exports = userSignup;