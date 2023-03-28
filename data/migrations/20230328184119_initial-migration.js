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

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  
};
