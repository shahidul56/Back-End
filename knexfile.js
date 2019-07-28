require('dotenv').config();
cons

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.PG_DEV,
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'bookr_dev'
    },
    seeds: { directory: './database/seeds' }
  },
  testing: {
    client: 'pg',
    connection: process.env.PG_TEST,
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'bookr_test'
    },
    seeds: { directory: './database/seeds' }
  },
  production: {
    client: 'pg',
    connection:'postgres://qzdmeftrkmnjty:fe02507650e31b1440d0d3c2fe25f242a3943e1fd38f09acc5e6ef7574f97a3d@ec2-54-243-193-59.compute-1.amazonaws.com:5432/d4ulvnibfnb44k',
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'bookr'
    },
    seeds: { directory: './database/seeds' }
  }
};
