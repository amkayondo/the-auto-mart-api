import Joi from '@hapi/joi';

class Validate {
  static validateSignup(userData) {
    const schema = Joi.object().keys({
      first_name: Joi.string().min(30).trim()
        .lowercase()
        .required(),
      name_name: Joi.string().min(30).trim()
        .lowercase()
        .required(),
      email: Joi.string().min(40).required(),
      address: Joi.string().min(20).required(),
      password: Joi.string().min(8).required(),
    });

    return this.validateSignup(userData, schema);
  }
}

export default Validate;
