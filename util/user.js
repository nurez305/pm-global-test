const Joi = require('joi')

function validateUser(user) {
    const schema = {
      firstname: Joi.string().min(3).required(),
      lastname: Joi.string().min(3).required(),
      gender: Joi.string().required(),
      date_of_birth: Joi.string().required()
    };
  
    return Joi.validate(user, schema);
  }


module.exports = validateUser
