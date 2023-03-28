// build your `/api/projects` router here

const router = require('express').Router()





router.use('*', (req, res) => {
    res.json({ api: 'up inside project router'})
}) //catch all for the errors

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside the project router',
        message: err.message, //<< you would not want this is a prod app
        stack: err.stack,
    })
}) //error handling middleware

module.exports = router