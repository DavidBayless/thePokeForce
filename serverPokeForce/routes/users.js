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
    party().select().where('party.id', response[0].savegameidone).fullOuterJoin('pokemon', 'party.pokeone', 'pokemon.joinid')
    .then(function(newResponse) {
      res.json(newResponse);
    });
  });
});

module.exports = router;
