const cors = require('cors');

const ALLOWED_ORIGINS = [
  'localhost:3000',
  'http://localhost:3000',
  'https://localhost:3000',
  'clericlvl2.movies.nomoredomainsmonster.ru',
  'http://clericlvl2.movies.nomoredomainsmonster.ru',
  'https://clericlvl2.movies.nomoredomainsmonster.ru',
];

const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

module.exports = cors({
  credentials: true,
  maxAge: 3600,
  methods: DEFAULT_ALLOWED_METHODS,
  origin: ALLOWED_ORIGINS,
});
