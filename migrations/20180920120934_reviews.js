exports.up = (knex, Promise) => {
    return knex.schema.createTable('reviews', (table) => {
      // TABLE COLUMN DEFINITIONS HERE
      table.increments().primary()      
      table.string('username').references('username').inTable('users').nullable().onDelete('CASCADE')
      table.string('tool_name').nullable()
      table.boolean('editable').nullable()
      table.string('text', 3000).nullable()
      table.string('path').nullable() 
      table.timestamps(true, true)
    })
  }
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('reviews')
  }