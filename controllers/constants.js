const SALT_ROUNDS = 10;

const MODEL_UPDATE_OPTIONS = {
  new: true,
  runValidators: true,
};

const JWT_SIGN_OPTIONS = {
  expiresIn: '7d',
};

const COOKIE_OPTIONS = {
  maxAge: 1000 * 3600 * 24 * 7,
  httpOnly: true,
  sameSite: 'None',
};
const MOVIE_SCHEMA_FIELDS = [
  'country',
  'director',
  'duration',
  'year',
  'description',
  'image',
  'trailerLink',
  'nameRU',
  'nameEN',
  'thumbnail',
  'movieId',
];
const MOVIES_LIMIT = 30;
const CREATION_DATE_SORT_CONFIG = { createdAt: -1 };

const MESSAGES = {
  successfulLogin: 'Пользователь вошёл в систему',
  successfulLogout: 'Пользователь вышел из системы',
  successfulDelete: 'Фильм был удалён',
};

module.exports = {
  SALT_ROUNDS,
  MODEL_UPDATE_OPTIONS,
  JWT_SIGN_OPTIONS,
  COOKIE_OPTIONS,
  MOVIE_SCHEMA_FIELDS,
  MOVIES_LIMIT,
  CREATION_DATE_SORT_CONFIG,
  MESSAGES,
};
