// build your `/api/tasks` router here

const router = require('express').Router()

const TaskModel = require('./model')


router.get('/', async (req, res, next) => {
    try{
        const tasks = await TaskModel.getAllTasks()

        tasks.forEach(task => {
            task.task_completed =!!task.task_completed
        })

        res.json(tasks)
        
    } catch (err) {
        next({ status: 404, message: 'there are no results for the task' })
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newTask = await TaskModel.createNewTask(req.body)
        newTask.task_completed = !!newTask.task_completed
        res.status(201).json(newTask)
    } catch (err) {
        next({ message: 'task post did not work' })
    }
})


router.use('*', (req, res) => {
    res.json({ api: 'up inside task router' })
}) //catch all for the errors

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside the tasks router',
        message: err.message,
        stack: err.stack,
    })
}) //error handling middleware


module.exports = router

