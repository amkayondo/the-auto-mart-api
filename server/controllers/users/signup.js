/* eslint-disable camelcase */
// eslint-disable-next-line no-unused-vars
import dotenv from 'dotenv';
import userTable from '../../models/user';
import pool from '../../config/db';


const createAccount = (req, res) => {
  // get user import
  const {
    first_name, last_name, email,
    address, password,
  } = req.body;
    // res.send(req.body);
//   const text = { `INSERT INTO
//                 users (
//                     first_name,
//                     last_name,
//                     email,address,
//                     password)
//                     VALUES ($1, $2, $3, $4, $5)`
//   };
};

export default createAccount;
