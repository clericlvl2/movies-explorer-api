const Movie = require('../models/movie');
const { ERROR_MESSAGE } = require('../utils/errors/constants');
const { ForbiddenError } = require('../utils/errors');
const { checkResponse, processError } = require('./helpers');
const {
  MOVIES_LIMIT,
  CREATION_DATE_SORT_CONFIG,
  MOVIE_SCHEMA_FIELDS, MESSAGES,
} = require('./constants');

const movieError = ERROR_MESSAGE.movies;

const getMovieData = (req) => {
  const data = {};

  MOVIE_SCHEMA_FIELDS.forEach((field) => {
    data[field] = req.body[field];
  });

  return data;
};

const getMovies = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const movies = await Movie.find({ owner: userId })
      .sort(CREATION_DATE_SORT_CONFIG)
      .limit(MOVIES_LIMIT)
      .populate('owner');

    res.send({ data: movies });
  } catch (err) {
    next(processError(err));
  }
};

const createMovie = async (req, res, next) => {
  try {
    const movieData = getMovieData(req);
    const userId = req.user._id;
    const movie = await Movie.create({ ...movieData, owner: userId });
    await Movie.populate(movie, 'owner');

    res.send({ data: movie });
  } catch (err) {
    next(processError(err, movieError.invalidDataOnCreate));
  }
};

const deleteMovie = async (req, res, next) => {
  try {
    const { movieId } = req.params;
    const movie = await Movie.findById(movieId);

    checkResponse(movie, movieError.notFound);

    const movieOwnerId = movie.owner.toString();
    const userId = req.user._id;

    if (movieOwnerId !== userId) {
      throw new ForbiddenError(movieError.accessForbidden);
    }

    await Movie.deleteById(movieId);

    const message = MESSAGES.successfulDelete;

    res.send({ message });
  } catch (err) {
    next(processError(err, movieError.notFound));
  }
};

module.exports = {
  getMovies,
  createMovie,
  deleteMovie,
};
