// build your `Task` model here


const db = require('../../data/dbConfig')


const getAllTasks = () => {
    return db('tasks')
} //this is working!


const createNewTask = task => {
     return db('tasks').insert(task)     
}


module.exports = { getAllTasks, createNewTask }
