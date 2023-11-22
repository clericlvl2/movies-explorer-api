const { celebrate, Joi } = require('celebrate');

const {
  validateText,
  validatePassword,
  validateEmail,
  paramsIdValidator,
} = require('./helpers');

const validateUser = celebrate({
  body: Joi.object().keys({
    name: validateText.min(2).max(30),
    email: validateEmail.required(),
    password: validatePassword,
  }),
});

const validateUserInfo = celebrate({
  body: Joi.object().keys({
    name: Joi.string(),
    email: validateEmail,
  }),
});

module.exports = {
  validateUser,
  validateUserInfo,
  validateUserId: paramsIdValidator('id'),
};
