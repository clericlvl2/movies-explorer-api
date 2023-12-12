const { celebrate, Joi } = require('celebrate');

const { validateEmail, validatePassword } = require('./helpers');

const validateLogin = celebrate({
  body: Joi.object().keys({
    email: validateEmail.required(),
    password: validatePassword,
  }),
});

module.exports = {
  validateLogin,
};
