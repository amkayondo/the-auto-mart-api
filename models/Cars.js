const carModel = require('./app');

const cars = [
    carModel(01, 01, new Date, "new", "sold", 24000, "tesla", "VXC", "car"),
    carModel(02, 34, new Date, "used", "available", 2400340, "tesla", "QW 2019", "track"),
    carModel(03, 34, new Date, "new", "available", 2400340, "tesla", "erc 2019", "track")

]

module.exports = cars;