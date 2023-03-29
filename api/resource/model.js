// build your `Resource` model here

const db = require('../../data/dbConfig')


const getAllResources = () => {
    return db('resources')
} 


const createNewResource = project => {
     return db('resources').insert(project)     
}


module.exports = { getAllResources, createNewResource }