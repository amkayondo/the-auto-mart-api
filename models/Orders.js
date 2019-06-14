// Order Model
const orderModel = (id, car_id,created_on, status, price,
                    price_offered) => 
    {
        return {
        id,
        car_id,
        created_on,
        status,
        price,
        price_offered 
    }
} 

// Order list
const order_db = []

module.exports = order_db;