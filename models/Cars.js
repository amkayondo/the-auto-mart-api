const carModel = require('./app');

const cars = [
    carModel(01, 01, new Date, "new", "sold", 24000, "tesla", "VXC", "car"),
    carModel(41, 34, new Date, "used", "available", 2400340, "tesla", "QW 2019", "track")
]

module.exports = cars;