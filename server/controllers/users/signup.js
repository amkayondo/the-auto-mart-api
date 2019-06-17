/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import Joi from '@hapi/joi';
import pool from '../../config/db';
import '@babel/polyfill';
import Database from '../db';

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
    return res.status(400).json({ status: 400, error: result.error.details[0].message });
  }

  const values = [
    req.body.first_name,
    req.body.last_name,
    req.body.email,
    req.body.address,
    req.body.password,
  ];

  try {
    const db = new Database();
    const user = await db.addUser(values);
    return res.status(201).send({ status: 201, data: user.rows[0] });
  } catch (error) {
    return res.status(400).send({ status: 400, error: error.detail });
  }
};

export default createAccount;
