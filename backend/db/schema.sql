DROP DATABASE IF EXISTS todos;
CREATE DATABASE todos;

\c todos;

DROP TABLE IF EXISTS todolist;

CREATE TABLE todolist (
   id SERIAL PRIMARY KEY,
   text TEXT,
   completed boolean
);

INSERT INTO todolist (text, completed)
VALUES 
('walk dog', true),
('buy milk', false);
