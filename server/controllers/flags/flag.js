/* eslint-disable consistent-return */
/* eslint-disable prefer-destructuring */
/* eslint-disable radix */
import Car from '../../models/car';

const db = new Car();


const postFlag = async (req, res) => {
  const result = await db.addFlag(new Car(req.body.car_id, req.body.reason, req.body.description));

  return res.status(201).send({
    status: 201,
    data: result.rows[0],
  });
};

module.exports.postFlag = postFlag;
