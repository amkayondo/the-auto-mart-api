const bcrypt = require('bcrypt');

const encrypt = (_param, _run) =>{
    return bcrypt(
        _param,
        10,
        (err, hash) =>{
            if(err){
                return res.status(500)
                .json({
                    error: err
                });
            } else {
                _run
            }
        }
        );
}


module.exports = encrypt;