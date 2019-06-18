/* eslint-disable camelcase */
import Joi from '@hapi/joi';
import pool from '../../config/db';
import '@babel/polyfill';

const theSchema = {
  first_name: Joi.string().min(5).required(),
  last_name: Joi.string().min(5).required(),
  email: Joi.string().min(12).required(),
  address: Joi.string().min(10).required(),
  password: Joi.string().min(8).required(),
};

const createAccount = async (req, res) => {
  const result = Joi.validate(req.body, theSchema);
  if (result.error) {
    return res.status(400).json({
      status: 400,
      error: result.error.details[0].message,
    });
  }

  const {
    // eslint-disable-next-line no-unused-vars
    first_name, last_name, email,
    // eslint-disable-next-line no-unused-vars
    address, password,
  } = req.body;

  const queryCreate = `INSERT INTO
      users (first_name, last_name,
        email, address, password)
        VALUES ($1, $2, $3, $4, $5)
        returning *`;
  const values = [
    req.body.first_name,
    req.body.last_name,
    req.body.email,
    req.body.address,
    req.body.password,

  ];

  try {
    const { rows } = await pool.query(queryCreate, values);
    return res.status(201).send({
      data: rows,
    });
  } catch (error) {
    return res.status(400).send({
      error: error.detail,
    });
  }
};

export default createAccount;
