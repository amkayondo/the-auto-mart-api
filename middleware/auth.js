const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const _auth = (req, res, next) =>{
    try{
        const _header = req.header('Authorization');
        if(!_header || _header === ""){
            return res.status(401).json({
                status: 401,
                error : "Unauthorized"
            })
        }
        const _token = jwt.verify(_header, 'JKASDBAKDAJSDBJS')
        req.user = _token;


        next();
    } catch {
        res.status(401).json({
            status: 401,
            error : "Invalid token"
        }) 
    }
}

module.exports = _auth;