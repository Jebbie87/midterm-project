'use strict';

const moment = require('moment');
const knex_config = require('./knexfile')

const knex = require('knex')(knex_config.development);

const name = process.argv[2];

const personLookup = (name) => {
  return knex('famous_people').select()
  .where('last_name', name)
  .orWhere('first_name', name)
  .then(function(printPerson) {
    const person = printPerson[0];
    console.log('Searching ...');
    console.log(`Found ${printPerson.length} person(s) with the name ${name}:`);
    console.log(`- ${person.id}: ${person.first_name} ${person.last_name}, born '${moment(person.birthdate).format('YYYY/MM/DD')}'`);
  })
  .catch(function(error) {
    console.log(error)
  })
};
// a promise is a way to write cleaner code, an evolution of callbacks, uses callback
//

personLookup(name)
  .finally(function() {
    knex.destroy();
  });


// knex('famous_people').select()
//   .then(function(results) {
//     console.log(results);
//   })
//   .catch(function(error){
//     console.log(error);
//   })
//   .finally(function() {
//     knex.destroy();
//   })