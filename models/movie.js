const mongoose = require('mongoose');

const { validateSchemaURL: validateURL } = require('../utils/validators/helpers');

const { Schema } = mongoose;

const movieSchema = new Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: validateURL,
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator: validateURL,
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: validateURL,
    },
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
});

movieSchema.statics.deleteById = function deleteById(_id) {
  return this.deleteOne({ _id });
};

module.exports = mongoose.model('movie', movieSchema);
