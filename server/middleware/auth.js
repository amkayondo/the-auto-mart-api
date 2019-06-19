/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

class Auth {
  auth(req, res, next) {
    try {
      const header = req.header('Authorization');
      if (!header || header === '') {
        return res.status(401).json({
          status: 401,
          error: 'Unauthorized',
        });
      }
      const token = jwt.verify(header, process.env.SECRETE_KEY);
      req.user = token;


      next();
    } catch (error) { res.status(401).json({ status: 401, error: 'Invalid token' }); }
  }

  createToken(params) {
    return jwt.sign(params, process.env.SECRETE_KEY, { expiresIn: '24hr' });
  }
}

export default Auth;
