require('../src/db/mongoose');
const Task = require('../src/models/task');

const makeLunchId = '5f2ac60b4e58cd19640e8921'

const tasks = [{description: 'Go biking'}, {description:'Finish school work'}, {description: 'Make lunch'}]

  const updateTaskAndCount = async (id, completed) => {
    const task = await Task.findByIdAndUpdate(id, {completed: completed});
    const count = await Task.countDocuments({completed});
    return {task, count}
  }

  updateTaskAndCount(makeLunchId, true)
        .then(result =>console.log(result))
        .catch(e => console.log(e));