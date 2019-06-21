/* eslint-disable consistent-return */
/* eslint-disable radix */
/* eslint-disable prefer-destructuring */
import Joi from '@hapi/joi';
import Car from '../../models/car';

const updateCarStatus = async (req, res) => {
  const car = new Car();
  const schema = {
    status: Joi.string().max(30).required(),
  };
  const result = Joi.validate(req.body, schema);
  if (result.error) {
    return res.status(400).json({ status: 400, error: result.error.details[0].message });
  }
  const carId = parseInt(req.params.carId);
  const token = req.user;
  const { email } = token;
  const usrID = await car.selectUser(email);
  const x = usrID.rows[0].id;
  const status = req.body.status;
  const updt = await car.updateStatus(status, carId, x);
  if (!updt) {
    res.status(400).json({ status: 400, error: 'you are not authorised to change the car status' });
  } else { res.status(200).json({ status: 200, data: updt.rows }); }
};


export default updateCarStatus;
