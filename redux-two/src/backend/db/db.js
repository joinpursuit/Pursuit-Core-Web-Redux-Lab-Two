const pgp = require("pg-promise")({});

const db = pgp("postgress://localhost:5432/todo_list");

module.exports = db;
