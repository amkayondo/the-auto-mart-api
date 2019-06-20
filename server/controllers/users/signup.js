/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import Joi from '@hapi/joi';
import '@babel/polyfill';
import dotenv from 'dotenv';
import Database from '../db';
import Bcrypt from '../../helpers/bcrypt';
import Auth from '../../middleware/auth';
import statusError from '../../helpers/errors';


dotenv.config();

const auth = new Auth();
const bcrypt = new Bcrypt();

const theSchema = {
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().min(12).required(),
  address: Joi.string().required(),
  password: Joi.string().min(8).required(),
};

const createAccount = async (req, res) => {
  const result = Joi.validate(req.body, theSchema);
  if (result.error) {
    return statusError();
  }

  const password = bcrypt.bcryptPassword(req.body.password);
  const values = [
    req.body.first_name,
    req.body.last_name,
    req.body.email,
    req.body.address,
    password,
  ];

  try {
    const db = new Database();
    const user = await db.addUser(values);
    const token = auth.createToken({ email: req.body.email });
    return res.status(201).send({ status: 201, data: user.rows[0], token });
  } catch (error) {
    return res.status(400).send({ status: 400, error: error.detail });
  }
};

export default createAccount;
