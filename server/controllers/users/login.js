/* eslint-disable consistent-return */
import bcrypt from 'bcrypt';
import Joi from '@hapi/joi';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Database from '../db';

dotenv.config();


const schema = {
  email: Joi.string().min(10).required(),
  password: Joi.string().min(8).required(),
};


const loginUser = async (req, res) => {
  const result = Joi.validate(req.body, schema);
  if (result.error) {
    return res.status(400).json({ status: 400, error: result.error.details[0].message });
  }
  const db = new Database();
  const u = await db.loginTheUser(req.body.email);
  if (u.rowCount > 0) {
    const isValidPassword = await bcrypt.compare(req.body.password, u.rows[0].password);
    if (!isValidPassword) {
      res.status(400).json({ status: 400, error: 'invalid password' });
    } const token = jwt.sign({ email: req.body.email }, process.env.SECRETE_KEY, { expiresIn: '24hr' });
    res.status(201).json({ status: 201, message: 'You are successfully loggedin', token });
  }
  res.status(201).json({
    status: 201,
    message: 'Successfully logined',
  });
};


export default loginUser;
