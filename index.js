const PORT = process.env.PORT || 4000;
const express = require('express');
const car_router = require('./routes/cars');
const user_router = require('./routes/user');
const order_router = require('./routes/orders');
const flag_router = require('./routes/flags');

const app = express();
app.use(express.json())

app.get('/api/v1', (req, res) =>{
    res.json({
        status: 200,
        message: "Welcome to Auto Mart Api V1"
    })
});

app.get('/', (req, res)=>{ 
    res.json({
        message: "Navigate to /api/v1 for v1"
    });
});



app.use('/api/v1', car_router);
app.use('/api/v1', user_router);
app.use('/api/v1', order_router);
app.use('/api/v1', flag_router);

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
});

module.exports = app;