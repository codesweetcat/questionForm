require('dotenv').config()

module.exports = {
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    timezone: 'Z',
    charset: 'utf8mb4'
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}