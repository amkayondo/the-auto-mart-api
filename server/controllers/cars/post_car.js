/* eslint-disable no-multi-assign */
/* eslint-disable consistent-return */
import Joi from '@hapi/joi';
import Car from '../../models/car';

const createCar = async (req, res) => {
  const schema = {
    // id: Joi.required(),
    // status: Joi.string().min(3).required(),
    price: Joi.number().min(5).required(),
    manufacturer: Joi.string().max(30).required(),
    state: Joi.string().max(30).required(),
    model: Joi.string().min(3).required(),
    body_type: Joi.string().min(3).required(),
  };
  const result = Joi.validate(req.body, schema);
  if (result.error) {
    return res.status(400).json({ status: 400, error: result.error.details[0].message });
  }

  const db = new Car();
  const token = req.user;
  const { email } = token;
  const found = await db.selectUser(email);
  console.log(found.rows[0].id);
  const newdata = [
    found.rows[0].id,
    req.body.state,
    'available',
    req.body.price,
    req.body.manufacturer,
    req.body.model,
    req.body.body_type,
  ];

  try {
    const car = await db.postCar(newdata);
    return res.status(200).json({
      status: 200,
      data: car.rows[0],
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ status: 400, error: error.detail });
  }
};

export default createCar;
