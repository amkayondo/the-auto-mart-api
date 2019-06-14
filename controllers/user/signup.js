const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const uuid = require('uuid');
let user_db = require('../../models/Users');

dotenv.config();

const userSignup = (req, res) =>{
    bcrypt.hash(req.body.password, 10, 
        (err, hash) => {
            if(err){
                 res.status(500).json(
                   { 
                       error : err
                    }
                )
            } else {
                const new_user = req.body = {
                    id: uuid.v4(),
                    email : req.body.email,
                    first_name: req.body.first_name,
                    last_name : req.body.last_name,
                    password : hash,
                    admin: false
                        }
                    
                const payload = {
                    id: uuid.v4(),
                    email : req.body.email,
                    first_name: req.body.first_name,
                    last_name : req.body.last_name,
                    admin: false
                }
                const token = jwt.sign(payload, process.env.SECRETE_KEY, { expiresIn: '24hrs'})
                res.header('auth-token', token)
                user_db.push(new_user)
                res.json({
                   token,
                    status: 200,
                    data: new_user,
                    rek: user_db
                })
                
                }
            })

    

}



module.exports = userSignup;