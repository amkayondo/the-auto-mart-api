const jwt = require('jsonwebtoken');


// SECRETE KEY
const SECRETE_KEY = "j8LzUkgPj2BLY8MFWu71cWAAvITx5zFY";

const auth_ = (user_data)=>{
    jwt.sign(
        {user_data}, 
        SECRETE_KEY, (err, token)=>{
           res.json({
               token
           }); 
        });
}

module.exports = auth_;