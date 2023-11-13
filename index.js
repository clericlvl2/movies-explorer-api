const express = require('express');
const { mongoose } = require('mongoose');

const app = express();

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://127.0.0.1/bitfilmsdb', {
  useNewUrlParser: true,
});

app.listen(PORT, () => {
  console.log('Сервер работает');
});
