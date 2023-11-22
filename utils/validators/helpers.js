const { Joi, celebrate } = require('celebrate');
const objectId = require('joi-objectid');
const { isEmail } = require('validator');

Joi.objectId = objectId(Joi);

const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/;

const validateText = Joi.string().required();
const validateNumber = Joi.number().required();
const validatePassword = Joi.string().required();
const validateEmail = Joi.string().email();
const validateURL = Joi.string().regex(urlRegex);
const validateObjectId = Joi.objectId();

const paramsIdValidator = id => celebrate({
  params: Joi.object().keys({
    [id]: Joi.objectId(),
  }),
});

const validateSchemaURL = value => urlRegex.test(value);
const validateSchemaEmail = value => isEmail(value);

module.exports = {
  validateText,
  validateNumber,
  validatePassword,
  validateEmail,
  validateObjectId,
  validateURL,
  paramsIdValidator,
  validateSchemaEmail,
  validateSchemaURL,
};
