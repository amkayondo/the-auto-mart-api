const PORT = process.env.PORT || 7000;
const express = require('express');
const car_router = require('./routes/cars');
const admin_router = require('./routes/admin');

const app = express();
app.use(express.json())

app.get('/', (req, res)=>{ 
    res.json({
        message: "Navigate to /api/v1 for v1"
    });
});



app.use('/api/v1', admin_router);
app.use('/api/v1', car_router);
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
});

module.exports = app;