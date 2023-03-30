// build your `Project` model here

const db = require('../../data/dbConfig')


const getAllProjects = () => {
    return db('projects')
} 


const getProjectById = id => {
    return db('projects').where('project_id', id).first()
}


const createNewProject = async project => {
    const [id] = await db('projects').insert(project)
     return getProjectById(id)  
}

module.exports = {
    getAllProjects,
    getProjectById,
    createNewProject,
}