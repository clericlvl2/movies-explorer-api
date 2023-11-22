const { celebrate, Joi } = require('celebrate');

const {
  validateText,
  validateNumber,
  validateURL,
  validateObjectId,
  paramsIdValidator,
} = require('./helpers');

const validateMovie = celebrate({
  body: Joi.object().keys({
    country: validateText,
    director: validateText,
    duration: validateNumber,
    year: validateText,
    description: validateText,
    image: validateURL,
    trailerLink: validateURL,
    thumbnail: validateURL,
    owner: validateObjectId,
    movieId: validateNumber,
    nameRU: validateText,
    nameEN: validateText,
  }),
});

module.exports = {
  validateMovie,
  validateMovieId: paramsIdValidator('movieId'),
};
