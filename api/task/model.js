// build your `Task` model here

const db = require('../../data/dbConfig')


const getAllTasks = () => {
    return db('tasks')
} 


const getTaskById = id => {
    return db('tasks').where('task_id', id).first()
}


const createNewTask = async task => {
    const [id] = await db('tasks').insert(task)
    return getTaskById(id)  
}


module.exports = { 
    getAllTasks,
    getTaskById,
    createNewTask
}
