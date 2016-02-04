
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),
    knex('pokemon').del(),
    knex('savegame').del(),

    // Inserts seed entries
    knex('users').insert({firstname: 'Bob', lastname: 'Bobson', password: 'password123', username: 'Bobby', savegameidone: 1, savegameidtwo: 2}),
    knex('savegame').insert({reservesjoinid: 1, partyjoinid: 1, keypoints: 0}),
    knex('savegame').insert({reservesjoinid: 2, partyjoinid: 2, keypoints: 0}),
    knex('pokemon').insert({pokename: 'Bulbasaur', name: 'Billy', entry: 1, firstType: 'Grass', secondType: 'Poison', level: 1, moveone: 'Tackle', movetwo: 'Leer', movethree: '', movefour: '', joinid: 1, owned: 'true'}),
    knex('party').insert({pokeone: 1})
  );
};
