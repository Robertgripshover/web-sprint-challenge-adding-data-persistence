// build your `/api/resources` router here

const router = require('express').Router()



router.use('*', (req, res, next) => {
    res.json({ api: 'up'})
}) //catch all for the errors

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside the recipes router',
        message: err.message, //<< you would not want this is a prod app
        stack: err.stack,
    })
}) //error handling middleware

module.exports = router