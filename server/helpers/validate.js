import Joi from '@hapi/joi';

const validateUser = (data) => {
  const theSchema = {
    first_name: Joi.string().min(3).required(),
    last_name: Joi.string().min(12).required(),
    email: Joi.string().min(12).required(),
    address: Joi.string().min(10).required(),
    password: Joi.string().min(8).required(),
  };
  return (data, theSchema);
};

export default validateUser;
