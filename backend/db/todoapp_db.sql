DROP DATABASE IF EXISTS todoapp_db;

CREATE DATABASE todoapp_db;

\c todoapp_db;

DROP TABLE IF EXISTS todo;

CREATE TABLE todo
(
    id SERIAL PRIMARY KEY,
    text VARCHAR UNIQUE,
    completed BOOLEAN DEFAULT FALSE
);

INSERT INTO todo
    (text)
VALUES
    ('Buy Milk');