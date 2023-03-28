// build your `/api/resources` router here

const router = require('express').Router()


const Resource = require('./model') //pulling in all the models


router.get('/:resource_id', (req, res, next) => {
    Resource.get(req.params.resource_id)
        .then(resource => {
            res.status(200).json(resource)     
        })
        .catch(next)
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