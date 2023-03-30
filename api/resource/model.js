// build your `Resource` model here

const db = require('../../data/dbConfig')


const getAllResources = () => {
    return db('resources')
} 

const getResourceById = id => {
    return db('resources').where('resource_id', id).first()
}

const createNewResource = async resource => {
    const [id] = await db('resources').insert(resource)
     return getResourceById(id)     
}


module.exports = { getAllResources, getResourceById, createNewResource }