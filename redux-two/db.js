const pgp = require("pg-promise")({});

const db = pgp("postgress://localhost:5432/todo_app_db");

module.exports = db; 