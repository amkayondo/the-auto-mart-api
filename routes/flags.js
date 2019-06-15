const express = require('express');
const flag_router = express.Router();
const flag_order = require('../controllers/flag/post_flag');
const auth = require('../middleware/auth')


flag_router.post('/flag/', auth, flag_order);
flag_router.get('/flag/', (req, res)=>{
    res.status(400).json({
        status: 400,
        massage: "Invalid route"
    })
});

module.exports = flag_router;   