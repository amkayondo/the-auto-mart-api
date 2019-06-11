const car_db = require('../models/Cars');
const _req = (req, res) =>{
    parseInt(req.params.id);
} 
const filter_data = car_db.filter(x => x.id === _req)

module.exports = filter_data;