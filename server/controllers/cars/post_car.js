/* eslint-disable consistent-return */
import Joi from '@hapi/joi';
import Car from '../../models/car';

const createCar = (req, res) => {
  const schema = {
    // owner : Joi.string().min(5).required(),
    status: Joi.string().min(3).required(),
    price: Joi.Number().Intenger().min(5).required(),
    manufacturer: Joi.string().max(30).required(),
    model: Joi.string().min(3).required(),
    body_type: Joi.string().min(3).required(),
  };
  const result = Joi.validate(req.body, theSchema);
  if (result.error) {
    return res.status(400).json({ status: 400, error: result.error.details[0].message });
  }
};

export default createCar;
