//add code to make project here,
// refer to module project 4 for sprint-14
//inside the data/seeds/02-make-recipes area

const projects = [
    {project_name: 'build my house', project_description: 'building a great home', project_completed: 0},
    {project_name: 'fix my car', project_description: 'my car has been broken a while', project_completed: 0},
    {project_name: 'mow the lawn', project_description: 'the grass is getting way to tall', project_completed: 1},
]

const resources = [
    {resource_name: 'my hammer', resource_description: 'for hitting nails'},
    {resource_name: 'lumber', resource_description: 'for framing the home'},
    {resource_name: 'socket set', resource_description: 'for working on the cars engine'},
    {resource_name: 'motor oil', resource_description: 'my car is low on oil'},
    {resource_name: 'lawn mower gas', resource_description: 'for hpowering the mower'},
    {resource_name: 'weed wacker twine', resource_description: 'for cutting grass in hard spots'},
]


const project_resources = [
    
]

const tasks = [
    {task_description: 'hammer nails into home', task_notes: 'work on house 1', task_completed: 0, project_id: 1},
    {task_description: 'frame the home', task_notes: 'work on house 2', task_completed: 0, project_id: 1},

    {task_description: 'use sockets to take apart engine', task_notes: 'work on car 1', task_completed: 0, project_id: 2},
    {task_description: 'use oil to refill engine', task_notes: 'work on car 2', task_completed: 0, project_id: 2},

    {task_description: 'fill up the mower with fuel', task_notes: 'work on lawn 1', task_completed: 0, project_id: 3},
    {task_description: 'use the weed wacker on back yard', task_notes: 'work on lawn 2', task_completed: 0, project_id: 3},
]



exports.seed = async function (knex) {
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
    await knex('project_resources').insert(project_resources)
}












