/* eslint-disable no-multi-assign */
import bcrypt from 'bcrypt';
// eslint-disable-next-line no-unused-vars
import dotenv from 'dotenv';
import uuid from 'uuid';
import jwt from 'jsonwebtoken';

// eslint-disable-next-line no-unused-vars
const createAccount = (req, res) => {
  bcrypt.hash(req.body.password, 10,
    (err, hash) => {
      if (err) {
        res.status(500).json(
          {
            error: err,
          },
        );
      } else {
        // eslint-disable-next-line camelcase
        const new_user = req.body = {
          id: uuid.v4(),
          email: req.body.email,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          password: hash,
          admin: false,
        };

        const payload = {
          id: uuid.v4(),
          email: req.body.email,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          admin: false,
        };
        // eslint-disable-next-line no-undef
        const token = jwt.sign(payload, 'JKASDBAKDAJSDBJS', { expiresIn: '24hrs' });
        res.header('auth-token', token);
        // user_db.push(new_user);
        res.json({
          token,
          status: 200,
          data: new_user,
        });
      }
    });
};


export default createAccount;
