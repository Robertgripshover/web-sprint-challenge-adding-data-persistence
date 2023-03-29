// build your `Project` model here

const db = require('../../data/dbConfig')


const getAllProjects = () => {
    return db('projects')
} //this is working!


const createNewProject = project => {
     return db('projects').insert(project)     
}

module.exports = {
    getAllProjects,
    createNewProject,
}