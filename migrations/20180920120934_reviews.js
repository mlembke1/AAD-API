exports.up = (knex, Promise) => {
    return knex.schema.createTable('reviews', (table) => {
      // TABLE COLUMN DEFINITIONS HERE
      table.increments().primary()      
      table.string('username').references('username').inTable('users').nullable().onDelete('CASCADE')
      table.string('tool_name').nullable()
      table.boolean('editable').nullable()
      table.boolean('sharable').nullable()
      table.boolean('OFF').nullable()
      table.string('text', 3000).nullable()
      table.string('firstName').nullable() 
      table.string('lastName').nullable() 
      table.string('jobTitle').nullable() 
      table.string('company').nullable() 
      table.integer('rating').nullable() 
      table.string('path').nullable()
      table.string('answer_1').nullable() 
      table.string('answer_2').nullable()
      table.string('answer_3').nullable()
      table.string('answer_4').nullable()
      table.string('answer_5').nullable()
      table.timestamps(true, true)
    })
  }
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('reviews')
  }