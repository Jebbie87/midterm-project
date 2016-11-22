'use strict';
const pg = require("pg");
const moment = require("moment");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

const showResults = function (name, callback) {
  let query = `SELECT * FROM famous_people
  WHERE last_name = $1::text;`;
  console.log('Searching ...')
  client.query(query, [name], (err, results) => {
    if (err) {
      console.log('query error', err);
      throw err;
    }
    callback(results);
  });
}

client.connect((err) => {
  if (err) {
    console.log('connection error');
    throw err;
  }
  var name = process.argv[2]

  showResults(name, (results) => {
    const person = results.rows[0]
    console.log(`Found ${results.rows.length} person(s) by the name of ${name}`);
    console.log(`${person.id}: ${person.first_name} ${person.last_name}, born '${moment(person.birthdate).format("YYYY/MM/DD")}'`)
    client.end();
  });


});

