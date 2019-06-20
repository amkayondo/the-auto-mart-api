/* eslint-disable consistent-return */
/* eslint-disable prefer-destructuring */
/* eslint-disable radix */
import Car from '../../models/car';

const car = new Car();

const getCarByID = async (req, res) => {
  const carId = parseInt(req.params.carId);
  try {
    const thecar = await car.getCarById(carId);
    if (thecar.rows.length === 0) {
      res.status(404).json({ status: 404, error: 'Car not found' });
    } else {
      res.status(200).json({
        status: 200,
        data: thecar.rows,
      });
    }
  } catch (error) {
    return res.status(400).json({ status: 400, error: 'Bad request' });
  }
};


export default getCarByID;
