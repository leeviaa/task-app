const express = require('express');
require('./db/mongoose');
const User = require('./models/user')
const Task = require ('./models/task');
const { db, aggregate } = require('./models/user');
const { Model } = require('mongoose');
const { ReplSet } = require('mongodb');
//initiate app in express
const app = express();
// set up port
const port = process.env.PORT || 3000;

//parse data coming in as json
app.use(express.json())

//post new users to database
app.post('/users', (req, res) => {
  const user = new User(req.body)
  user.save().then( () => {
    res.send(user)
  }).catch( err => {
    res.status(500).send(err)
   })
})

//fetch all users from database
app.get('/users', (req, res) => {
  User.find({}).then((users) => {
    res.send(users)
  }).catch(err => {
    res.status(400).send(err)
  })
})

//fetch one user from database by id
app.get(`/users/:id`, (req, res) => {
  const _id = req.params.id
  User.findById(_id).then( user => {
    if(!user) {
      return res.status(404).send()
    }
    res.send(user)
  }).catch( err => {
    res.status(500).send()
  })

})
//post new task to database
app.post('/tasks', (req, res) => {
  const task = new Task(req.body);
  task.saved().then( () => {
    console.log(task)
    res.send(task)
  }).catch( err => {
    res.status(400).send(err)
  })
})

//Fetch all tasks
app.get('/tasks', (req, res) => {
  Task.find({}).then(tasks => 
    res.send(tasks)).catch(err => {
      res.status(500).send()
    })
})

//fetch single task
app.get('/tasks/:id', (req, res) => {
  const _id = req.params.id
    Task.findById(_id).then(task => res.send(task))
          .catch(err => {
            res.status(500).send()
          })
})
//listen on port 
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
})

