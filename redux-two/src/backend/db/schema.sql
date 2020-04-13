DROP DATABASE IF EXISTS todo_list;
CREATE DATABASE todo_list; 

\c todo_list; 



DROP TABLE IF EXISTS todo; 


CREATE TABLE todo(
    id SERIAL PRIMARY KEY, 
    username TEXT NOT NULL UNIQUE,
    name TEXT, 
    completed BOOLEAN

);

INSERT INTO todo(username, name, completed)
VALUES
('Corey', 'washingDishes', TRUE), 
('Jon', 'washingDishes', FALSE), 
('Jhenya', 'laundry', TRUE),
('Caroline', 'laundry', FALSE),
('Deja', 'laundry', TRUE);