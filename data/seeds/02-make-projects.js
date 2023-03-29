//add code to make project here,
// refer to module project 4 for sprint-14
//inside the data/seeds/02-make-recipes area

const projects = [
    {project_name: 'build my house', project_description: 'this project will be building a great home'},
    {project_name: 'fix my car', project_description: 'my car has been broken a while, it will be good to fix it'},
    {project_name: 'mow the lawn', project_description: 'the grass is getting way to tall'},
]

const resources = [

]

const tasks = [

]

const project_resources = [

]

exports.seed = async function (knex) {
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
    await knex('project_resources').insert(project_resources)
}












