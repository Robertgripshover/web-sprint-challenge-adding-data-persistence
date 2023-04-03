// build your `/api/projects` router here

const router = require('express').Router()

const ProjectModel = require('./model')


router.get('/', async (req, res, next) => {
    try{
        const projects = await ProjectModel.getAllProjects()

        projects.forEach(project => {
            project.project_completed = Boolean(project.project_completed)
        })
        res.json(projects)

    } catch (err) {
        next({ status: 404, message: 'there are no results' })
    }
}) 

router.post('/', async (req, res, next) => {
    try {

        const newProject = await ProjectModel.createNewProject(req.body)
        newProject.project_completed = Boolean(newProject.task_completed)

        res.status(201).json(newProject)

    } catch (err) {
        next({ message: 'projects post did not work' })
    }
})


router.use('*', (req, res) => {
    res.json({ api: 'up inside project router' })
}) //catch all for the errors

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside the project router',
        message: err.message, //<< you would not want this is a prod app
        stack: err.stack,
    })
}) //error handling middleware

module.exports = router