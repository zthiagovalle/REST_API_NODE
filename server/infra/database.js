const pgp = require('pg-promise')();
const db = pgp({
    user: 'postgres',
    password: 'mypassword',
    host: 'localhost',
    port: 5432,
    database: 'mydatabase'
});

module.exports = db;