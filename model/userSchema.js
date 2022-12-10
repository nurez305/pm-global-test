const mongoose = require('mongoose')


const User = mongoose.model('User', new mongoose.Schema({
    firstname: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50
    },
    lastname: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50
    },
    gender: {
      type: String,
      required: true,
    },
    date_of_birth: {
      type: String,
      required: true,
    },
  },
  {
      timestamps: true,
      versionKey: false
    }
  ));


  module.exports = User

