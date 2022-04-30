/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
    exports.up = function(knex) {
        return knex.schema
        .createTable('question_sets3', function (table) {
            table.increments('id').primary()
            table.string('title').notNullable()
            table.string('type').notNullable()
            table.jsonb('answers').notNullable()
          })
    
          .createTable('answers3', function (table) {
            table.increments('id').primary()
            table.integer('user_id').notNullable()
            table.integer('question_sets_id').notNullable()
            table.jsonb('answers_brief').notNullable()
          })
    };
    
    /**
     * @param { import("knex").Knex } knex
     * @returns { Promise<void> }
     */
    exports.down = function(knex) {
        return knex.schema
        .dropTable('question_sets3')
        .dropTable('answers3');
    };
    