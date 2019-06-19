/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import Joi from '@hapi/joi';
import '@babel/polyfill';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Database from '../db';

dotenv.config(); 

const theSchema = {
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().min(12).required(),
  address: Joi.string().min(10).required(),
  password: Joi.string().min(8).required(),
};

const createAccount = async (req, res) => {
  const result = Joi.validate(req.body, theSchema);
  if (result.error) {
    return res.status(400).json({ status: 400, error: result.error.details[0].message });
  }

  const password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

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
    const token = jwt.sign({ email: req.body.email }, process.env.SECRETE_KEY, { expiresIn: '24hr' });
    return res.status(201).send({ status: 201, data: user.rows[0], token });
  } catch (error) {
    return res.status(400).send({ status: 400, error: error.detail });
  }
};

export default createAccount;
