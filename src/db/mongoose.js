const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})

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
    type: String, required: true, trim: true, minLength: 7, validate(value) {
      if(value.toLowerCase().includes('password') ) {
        throw new Error('Please enter a valid password')
      }
    }
  }
})
//create new instance of user 
// const me = new User({
//   name: '   Leevi      ',
//   age: 25,
//   email: '  LEEVIAA@yahoo.com   ',
//   password: 'password134'
// })

// me.save().then( (res) => {
//   console.log(res);
// }).catch(err => {
//   console.log('FROM ERROR', err);
// })

const Task = mongoose.model('Task', {
  description: {
    type: String, required: true, trim: true
  },
  completed: {
    type: Boolean,
    default: false,
  }
})

const newTask = new Task({ description: 'Finish dinner', completed: true});

newTask.save().then( res => console.log(res)).catch(err => console.log(err))

