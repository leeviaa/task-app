require('../src/db/mongoose')
const User = require('../src/models/user');

const idBenDover = '5f2abb112ba4b63160e0a275'
const idLeevi = '5f2abaf32ba4b63160e0a274'


const updateAgeAndCount = async (id, age) => {
 const user =  await User.findByIdAndUpdate(id, {age: age});
 const count = await User.countDocuments({age});
 return {user, count}

}

updateAgeAndCount(idLeevi, 6).then( result => {
  console.log('RESULTS ARE...',result.user);
}).catch(e => console.log('ERRRORRRRRR!!!!!!!!',e))

// User.findByIdAndUpdate(idLeevi, {age: 1}).then((user) => {
//   console.log(user);
//   return User.countDocuments({age: 1})
// }).then(result => console.log(result))
//   .catch(e => console.log(e))
