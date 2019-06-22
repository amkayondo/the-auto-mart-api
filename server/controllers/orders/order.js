/* eslint-disable no-undef */
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable prefer-destructuring */
/* eslint-disable radix */
import Car from '../../models/car';

const db = new Car();


const makeOrder = async (req, res) => {
  const car_id = req.body.id;
  const user_email = req.user.email;

  const car = await db.selectById('cars', car_id);

  if (car.rowCount === 0) return res.status(404).send({ status: 404, message: `Car with id of ${car_id} not found` });
  //  Get user
  const user = await db.selectBy('users', 'email', user_email);
  if (user.rowCount === 0) return res.status(401).send({ status: 401, message: 'Your are not signed in, try again later.' });

  // Make order
  const order = new Order(user.rows[0].id, car_id, car.rows[0].price, 'pending', car.rows[0].price);

  const result = await db.addOrder(order);

  return res.status(200).send({ status: 200, message: 'Purchase order done sucessfuly.', data: result.rows[0] });
};

updateOrder = async (req, res) => {
  let price_offered = req.body.price;
  let order_id = req.params.id;
  //  Get user
  const user = await db.selectBy('users', 'email', req.user.email);

  if (user.rowCount === 0) return res.status(401).send({ status: 401, message: 'First signin to make an order, please try again.' });

  const result = await db.updateOrderPrice({ price: price_offered, id: order_id, buyer: user.rows[0].id });

  if (result.rowCount > 0) {
    return res.status(200).send({ status: 200, message: 'Car price updated sucessfuly.', data: result.rows[0] });
  }

  return res.status(401).send({ status: 401, message: 'Price update has failed beacuse you don\'t own this order.' });
};


module.exports.makeOrder = makeOrder;
module.exports.updateOrder = updateOrder;
