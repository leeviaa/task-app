const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
  name: {
    type: String, required: true, trim: true
  },
  age: {
    type: Number, default: 0, validate(value) {
      if(value < 0) {
        throw new Error('Please enter a valid age.')
      }
    }
  },
  email: {
    type: String, required: true, lowercase: true, trim: true, validate(value) {
       if(!validator.isEmail(value)) {
         throw new Error('Please enter a valid email address.')
       }
    }

  },
  password: {
    type: String, required: true, trim: true, validate(value) {
      if(value.length < 8 || value.toLowerCase().includes('password') ) {
        throw new Error('Please enter a valid password')
      }
    }
  }
})

module.exports = User