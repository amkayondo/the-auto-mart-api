import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

// Auth
class Auth_ {
  static passwordHarsh(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  }

  static matchHarsh(password, hashPassword) {
    return bcrypt.compareSync(password, hashPassword);
  }

  static createToken(email) {
    return jwt.sign({
      user: email,
    }, process.env.SECRETE, { expiresIn: '24hr' });
  }
}

export default Auth_;
