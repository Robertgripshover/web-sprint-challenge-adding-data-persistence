/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema
    .createTable('projects', table => {
        table.increments('project_id') 
        table.string('project_name', 200).notNullable()
        table.string('project_description', 300)
        table.boolean('project_completed') 
    })
    .createTable('resources', table => {
        table.increments('resource_id') 
        table.string('resource_name').notNullable().unique()
        table.string('resource_description')
    })
    .createTable('tasks', table => {
        table.increments('task_id') 
        table.string('task_description').notNullable()
        table.string('task_notes')
        table.boolean('task_completed') 
        //FK vv
        table.integer('project_id').notNullable()
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
        //^^ I am pretty sure all of this is the FK pointing to the project_id
    })
    .createTable('project_resources', table => {
        table.increments('project_resource_id')
        table.integer('task_id').notNullable()
        .unsigned()
        .notNullable()
        .references('task_id')
        .inTable('tasks')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
        table.integer('resource_id').notNullable()
        .unsigned()
        .notNullable()
        .references('resource_id')
        .inTable('resources')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')  
};
