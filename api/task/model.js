// build your `Task` model here

const db = require('../../data/dbConfig')









async function getAllTasks() {

    const tasksRows = await db('tasks as t')
    .leftJoin('projects as p', 'p.project_id', 't.project_id',)
    .select(
        't.task_id',
        't.task_description',
        't.task_notes',
        't.task_completed',
        'p.project_name',
        'p.project_description',
        'p.project_id'
    )

    return tasksRows

} 


async function getTaskById(id) {

    const currentTask = db('tasks').where('task_id', id).first()
    return currentTask
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
