/* eslint-disable consistent-return */
/* eslint-disable prefer-destructuring */
/* eslint-disable radix */
import Joi from '@hapi/joi';
import Car from '../../models/car';

const car = new Car();

const getCarsbyange = async (req, res) => {
  const schema = {
    min_price: Joi.number().min(5).required(),
    max_price: Joi.number().min(5).required(),
  };

  const result = Joi.validate(req.body, schema);
  if (result.error) {
    return res.status(400).json({ status: 400, error: result.error.details[0].message });
  }

  const minprice = req.query.min_price;
  const maxprice = req.query.max_price;


  const data = await car.getByrange(minprice, maxprice);
  if (data.length === 0) {
    res.status(404).json({ status: 404, error: 'No cars available for the moment' });
  } else { res.status(200).json({ status: 200, data }); }
};

export default getCarsbyange;
