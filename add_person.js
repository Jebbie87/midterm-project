'use strict';

const moment = require('moment');
const knex_config = require('./knexfile')

const knex = require('knex')(knex_config.development)

const newFirstName = process.argv[2];
const newLastName = process.argv[3];
const newBirthday = process.argv[4];

const addPerson = (firstName, lastName, birthday) => {

  knex('famous_people').insert([{first_name: firstName, last_name: lastName, birthdate: birthday}])
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.log(error);
  })
}


addPerson(newFirstName, newLastNamem, newBirthday)
  .finally(function() {
    knex.destroy();
  })