// build your `Resource` model here

function getResourceById(resource_id) {
    return Promise.resolve(`that is an awesome resource with id ${resource_id}`)
}

module.exports = { getResourceById }