const HTTP_ERROR = {
  VALIDATION: {
    name: 'ValidationError',
    status: 400,
  },
  UNAUTHORIZED: {
    name: 'UnauthorizedError',
    status: 401,
  },
  FORBIDDEN: {
    name: 'ForbiddenError',
    status: 403,
  },
  NOT_FOUND: {
    name: 'NotFoundError',
    status: 404,
  },
  CONFLICT: {
    name: 'ConflictError',
    status: 409,
  },
  SERVER: {
    name: 'HttpError',
    status: 500,
  },
};

const MONGOOSE_ERROR = {
  VALIDATION: {
    name: 'ValidationError',
  },
  CAST: {
    name: 'CastError',
  },
};

const ERROR_MESSAGE = {
  users: {
    notFound: 'Пользователь не найден.',
    invalidDataOnCreate:
      'Переданы некорректные данные при создании пользователя.',
    invalidDataOnUpdate:
      'Переданы некорректные данные при обновлении профиля.',
    invalidEmailOnSignUp: 'Пользователь с такой почтой уже существует',
    invalidEmailOnUpdate: 'Такая почта уже зарегистрирована',
    invalidEmailOrPassword: 'Неправильные почта или пароль.',
    invalidEmail: 'Почта указана не верно',
  },
  movies: {
    notFound: 'Фильм не найден.',
    invalidDataOnCreate:
      'Переданы некорректные данные при добавлении фильма.',
    accessForbidden: 'Попытка удалить чужой фильм',

  },
  invalidEmailOrPassword: 'Неправильные почта или пароль',
  authorizationRequired: 'Необходима авторизация',
  invalidRoute: 'Адрес запроса указан неверно.',
  serverError: 'На сервере произошла ошибка.',
};

module.exports = {
  HTTP_ERROR,
  MONGOOSE_ERROR,
  ERROR_MESSAGE,
};
