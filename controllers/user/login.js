const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const uuid = require('uuid');
let user_db = require('../../models/Users');

const userLogin = (req, res) =>{
    // validate
   /*  const user_data  = {
        'email': req.body.email,
        'password': req.body.password  
    } */
    // check if user exists
    const x_user = user_db.find(x => x.email === req.body.email)
    if(x_user){
        // varify password

        console.log(x_user.password)
        console.log(user_db.password)

        const x_password = bcrypt.compare(x_user.password, user_db.password)
        if(!x_password) return res.status(401).json('Incorrect Password')
        // get token
        const token = jwt.sign({email: x_user.email}, process.env.SECRETE_KEY);
        res.header('auth', token).json({
            status: 200,
            message: 'You are successfully loggedin',
            token,
            data: x_user
        })

    }
}



module.exports = userLogin;