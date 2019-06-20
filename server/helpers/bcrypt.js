/* eslint-disable class-methods-use-this */
import bcrypt from 'bcrypt';

class Bcrypt {
  bcryptPassword(password) {
    const result = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    return result;
  }
}


export default Bcrypt;
