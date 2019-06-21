/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
import Car from '../../models/car';

const getUnsoldCars = async (req, res) => {
  const user = req.query.status;
  const car = new Car();
  const data = await car.getUnsold(user);
  if (user === 'available') {
    res.status(200).json({ status: 200, data: data.rows });
  } else res.status(404).json({ status: 404, error: 'Car not found' });
};

export default getUnsoldCars;
