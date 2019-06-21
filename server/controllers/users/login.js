/* eslint-disable consistent-return */
import Joi from '@hapi/joi';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import Database from '../db';
import Auth from '../../middleware/auth';

dotenv.config();

const auth = new Auth();

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
  if (u.rows.length > 0) {
    const isValidPassword = await bcrypt.compare(req.body.password, u.rows[0].password);
    if (!isValidPassword) {
      res.status(400).json({ status: 400, error: 'invalid password' });
    } const token = auth.createToken({ email: req.body.email });
    res.status(201).json({ token, status: 201, message: 'You are successfully loggedin' });
  }
  res.status(201).json({
    status: 201,
    message: 'Successfully logged in',
  });
};


export default loginUser;
