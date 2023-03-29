// build your `Resource` model here

const db = require('../../data/dbConfig')


const getAllResources = () => {
    return db('resoures')
} 


const createNewResource = project => {
     return db('resoures').insert(project)     
}


module.exports = { getAllResources, createNewResource }