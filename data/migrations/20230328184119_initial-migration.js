/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema
    .createTable('projects', table => {
        table.increments('project_id').primary() //<< don't know if I should add this .primary() ???
        table.string('project_name', 200).notNullable()
        table.string('project_description', 300)
        table.boolean('project_completed') //<< this could be wrong check this ???
    })
    .createTable('resoures', table => {
        table.increments('resource_id').primary() //<< don't know if I should add this .primary() ???
        table.string('resource_name').notNullable().unique()
        table.string('resource_description')
    })
    .createTable('tasks', table => {
        table.increments('task_id').primary() //<< don't know if I should add this .primary() ???
        table.string('task_description').notNullable()
        table.string('task_notes')
        table.boolean('task_completed') //<< this could be wrong check this ???
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

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  
};
