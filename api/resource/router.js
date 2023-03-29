// build your `/api/resources` router here

const router = require('express').Router()


const ResourceModel = require('./model') //pulling in all the models




router.get('/', async (req, res, next) => {
    try{
        const resource = await ResourceModel.getAllResources()
        res.json(resource)
    } catch (err) {
        next({ status: 404, message: 'there are no results for the resource'})
    }
}) //this is working!


router.post('/', async (req, res, next) => {
    try {
        const newResource = await ResourceModel.createNewResource(req.body)
        res.status(201).json(newResource)
    } catch (err) {
        next({ message: 'resources post did not work' })
    }
})





router.use('*', (req, res) => {
    res.json({ api: 'up inside resource router'})
}) //catch all for the errors

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside the resource router',
        message: err.message, //<< you would not want this is a prod app
        stack: err.stack,
    })
}) //error handling middleware

module.exports = router