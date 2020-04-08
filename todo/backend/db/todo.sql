-- Create Database
DROP DATABASE IF EXISTS todo_db;
CREATE DATABASE todo_db;

\c todo_db;

-- Create Tables
DROP TABLE IF EXISTS todos;

-- Create user Table
CREATE TABLE todos
(
    id SERIAL PRIMARY KEY,
    description VARCHAR,
    completed BOOLEAN
);

INSERT INTO todos
    ( description, completed)
VALUES
    ('walk dog', false),
    ('do homework', false);