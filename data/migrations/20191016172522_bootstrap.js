
exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
      users.increments('id')

      users.string('username', 24)
      .notNullable()
      .unique()
      users.string('password').notNullable()
      users.string('department', 24)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
