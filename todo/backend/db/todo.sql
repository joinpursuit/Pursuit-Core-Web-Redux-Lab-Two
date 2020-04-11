-- Create Database
DROP DATABASE IF EXISTS todo_db;
CREATE DATABASE todo_db;

\c todo_db;

DROP TABLE IF EXISTS todos;

-- Create Tables
-- Create todos Table
CREATE TABLE todos
(
    id SERIAL PRIMARY KEY,
    description VARCHAR,
    completed BOOLEAN,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO todos
    ( description, completed)
VALUES
    ('walk dog', false),
    ('do homework', false);