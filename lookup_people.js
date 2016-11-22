'use strict';

const moment = require('moment');
const knex_config = require('./knexfile')

const knex = require('knex')({
  client: 'pg',
  connection: knex_config.development.connection,
});

const name = process.argv[2];

knex('famous_people').select()
  .where('last_name', name)
  .orWhere('first_name', name)
  .then(function(printPerson) {
    const person = printPerson[0];
    console.log('Searching ...');
    console.log(`Found ${printPerson.length} person(s) with the name ${name}:`);
    console.log(`- ${person.id}: ${person.first_name} ${person.last_name}, born '${moment(person.birthdate).format('YYYY/MM/DD')}'`);
    // console.log(person[0].id)
  })
  .catch(function(error) {
    console.log(error)
  })
  .finally(function() {
    knex.destroy();
  });

// a promise is a way to write cleaner code, an evolution of callbacks, uses callback
//