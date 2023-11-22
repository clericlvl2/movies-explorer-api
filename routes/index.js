const router = require('express').Router();

const auth = require('../middlewares/auth');
const { unmatchedRouteHandler } = require('../controllers/helpers');
const moviesRoutes = require('./movies');
const usersRoutes = require('./users');
const rootRoutes = require('./auth');

router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

router.use('/', rootRoutes);
router.use('/users', auth, usersRoutes);
router.use('/movies', auth, moviesRoutes);
router.use('*', auth, unmatchedRouteHandler);

module.exports = router;
