/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
// eslint-disable-next-line no-unused-vars
import pool from '../../config/db';
// import Validate from '../../helpers/validate';

const createAccount = (req, res) => {
  // Validate.validateSignup(req.body);
  // get user import
  const {
    first_name, last_name, email,
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
    req.body.email,
  ];

  try {
    const { rows } = pool.query(queryCreate, values);
    return res.status(201).send('User created');
  } catch (error) {
    return res.status(400).send(error);
  }
};

export default createAccount;
