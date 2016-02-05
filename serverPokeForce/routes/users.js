var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function pokemon() {
  return knex('pokemon');
}

function users() {
  return knex('users');
}

function savegame() {
  return knex('savegame');
}

function party() {
  return knex('party');
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  users().select().fullOuterJoin('party', 'users.savegameidone', 'party.id')
  .then(function(response) {
    console.log(response);
    var promises = [];
    for (var i = 0; i < response.length; i++) {
      promises.push(party().select().where('party.id', response[i].savegameidone).fullOuterJoin('pokemon', 'party.pokeone', 'pokemon.joinid'));
    }
    Promise.all(promises)
    .then(function(newResponse) {
      res.json(newResponse);
    });
  });
});

module.exports = router;
