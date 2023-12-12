require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const { mongoose } = require('mongoose');
const { errors } = require('celebrate');

const routes = require('./routes');
const limiter = require('./middlewares/limiter');
const cors = require('./middlewares/cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { errorConsoleLogger, globalErrorHandler } = require('./controllers/errors');
const { DEFAULT_PORT, DEFAULT_DB_ADDRESS } = require('./utils/constants');

const app = express();

const {
  PORT = DEFAULT_PORT,
  MOVIES_DB = DEFAULT_DB_ADDRESS,
} = process.env;

app.use(limiter);
app.use(helmet());
app.use(cors);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(MOVIES_DB, {
  useNewUrlParser: true,
});

app.use(requestLogger);
app.use('/', routes);
app.use(errorLogger);
app.use(errorConsoleLogger);

app.use(errors());
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log('Сервер работает');
});
