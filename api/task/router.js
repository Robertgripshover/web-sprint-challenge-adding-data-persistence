// build your `/api/tasks` router here

const router = require('express').Router()




router.use('*', (req, res) => {
    res.json({ api: 'up inside task router'})
}) //catch all for the errors

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside the tasks router',
        message: err.message, //<< you would not want this is a prod app
        stack: err.stack,
    })
}) //error handling middleware

module.exports = router

