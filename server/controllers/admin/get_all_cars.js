/* eslint-disable consistent-return */
/* eslint-disable prefer-destructuring */
/* eslint-disable radix */
import Car from '../../models/car';

const car = new Car();

const getAllCars = async (req, res) => {
  const x = await car.getAllCars();
  if (x.length === 0) {
    res.status(404).json({ status: 404, error: 'No cars avilable' });
  } else { res.status(200).json({ status: 200, data: x.rows }); }
};

export default getAllCars;
