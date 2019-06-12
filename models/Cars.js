const carModel = (id, owner, created_on ,state, status
    ,price, manufacturer, model, body_type) => {
        return {
            id,
            owner, 
            created_on,
            state, 
            status,
            price, 
            manufacturer, 
            model, 
            body_type
      }}


const cars = [
    carModel(01, 01, new Date, "new", "sold", 24000, "tesla", "VXC", "car"),
    carModel(02, 34, new Date, "used", "available", 2400340, "tesla", "QW 2019", "track"),
    carModel(03, 34, new Date, "new", "available", 2400340, "tesla", "erc 2019", "track"),
    carModel(03, 34, new Date, "used", "sold", 2400340, "tesla", "fdf 2019", "car")
]

module.exports = cars;