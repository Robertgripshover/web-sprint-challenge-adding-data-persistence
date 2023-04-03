// build your `Project` model here

const db = require('../../data/dbConfig')














async function getAllProjects() {

    const projectRows = await db('projects as p')

    return projectRows
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