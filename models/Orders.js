// Order Model
const orderModel = (id, buyer, car_id, amount, status) => {
    return {
        id,
        buyer,
        car_id,
        amount,
        status
    }
} 

// Order list
const order_db = [
    orderModel(04, 01, 01, 2034000, "accepted"),
    orderModel(03, 02, 01, 200000, "pending"),
    orderModel(03, 02, 01, 200000, "rejected"),

]

module.exports = order_db;