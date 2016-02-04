
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('pokemon', function(table) {
      table.increments('id');
      table.string('pokename', 20);
      table.string('name', 20);
      table.integer('entry');
      table.string('firstType', 20);
      table.string('secondType', 20);
      table.integer('level');
      table.string('moveone');
      table.string('movetwo');
      table.string('movethree');
      table.string('movefour');
      table.integer('joinid');
      table.string('owned');
    }),
    knex.schema.createTable('users', function(table) {
      table.increments('id');
      table.string('firstname', 40);
      table.string('lastname', 40);
      table.string('password', 255);
      table.string('username', 40);
      table.integer('savegameidone');
      table.integer('savegameidtwo');
    }),
    knex.schema.createTable('savegame', function(table) {
      table.increments('id');
      table.integer('reservesjoinid');
      table.integer('partyjoinid');
      table.integer('keypoints');
    }),
    knex.schema.createTable('party', function(table) {
      table.increments('id');
      table.integer('pokeone');
      table.integer('poketwo');
      table.integer('pokethree');
      table.integer('pokefour');
      table.integer('pokefive');
      table.integer('pokesix');
      table.integer('pokeseven');
      table.integer('pokeeight');
    }),
    knex.schema.createTable('reserve', function(table) {
      table.increments('id');
      table.integer('pokeone');
      table.integer('poketwo');
      table.integer('pokethree');
      table.integer('pokefour');
      table.integer('pokefive');
      table.integer('pokesix');
      table.integer('pokeseven');
      table.integer('pokeeight');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTable('bookList')
  ]);
};
