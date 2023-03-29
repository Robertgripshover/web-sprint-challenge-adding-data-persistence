// build your `Resource` model here

const db = require('../../data/dbConfig')


const getAllResources = () => {
    return db('resouces')
} //this is working!


const createNewResource = project => {
     return db('resouces').insert(project)     
}


module.exports = { getAllResources, createNewResource }