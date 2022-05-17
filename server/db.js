const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "rakion123",
    host: "localhost",
    port: "5432",
    database: "kardban"
});

module.exports = pool;