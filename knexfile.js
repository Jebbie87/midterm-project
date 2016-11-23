// Update with your config settings.
// To remotely access my database when needed
//psql -h ec2-23-21-71-9.compute-1.amazonaws.com -U gkxpscspthrkpp -d d2p7o1s660rjoh

module.exports = {

  development: {
    client: 'pg',
    connection: {
      user     : "gkxpscspthrkpp",
      password : "CmXeninmCTMpeqpue4UuU3eUDD",
      database : "d2p7o1s660rjoh",
      host     : "ec2-23-21-71-9.compute-1.amazonaws.com",
      port     : 5432,
      ssl      : true,
    }
  }

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
