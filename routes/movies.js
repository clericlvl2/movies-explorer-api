const router = require('express').Router();

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');
const {
  validateMovie,
  validateMovieId,
} = require('../utils/validators/movies');

router.route('/')
  .get(getMovies)
  .post(validateMovie, createMovie);

router.delete('/:movieId', validateMovieId, deleteMovie);

module.exports = router;
