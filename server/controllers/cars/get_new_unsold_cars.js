/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
import Car from '../../models/car';


const getAllnewUnsoldCars = async (req, res) => {
  const status = req.query.status;
  const state = req.query.state;
  const car = new Car();
  try {
    const thecar = await car.getUnsoldNew(state, status);
    if (status !== 'available' || state !== 'new') {
      res.status(400).json({
        status: 400,
        error: 'Invalid request',
      });
    } else { res.status(200).json({ status: 200, data: thecar.rows }); }
  } catch (error) {
    return res.status(400).json({ status: 400, error: 'Bad request' });
  }
};

export default getAllnewUnsoldCars;
