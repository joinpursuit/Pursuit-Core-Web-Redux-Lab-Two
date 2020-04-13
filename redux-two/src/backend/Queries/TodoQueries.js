const db = require("../db/db");

const getTodo = async (req, res) => {
  try {
    let user = await db.one(
      "SELECT * FROM todo WHERE username = $1",
      req.params.username
    );
    res.status(200).json({
      status: "success",
      message: "retrieved todos from user",
      payload: user
    });
  } catch (err) {
    res.status(404).json({
      status: err,
      message: "user todos were not found",
      payload: null
    });
  }
};

const createTodo = async (req, res) => {
  console.log(req.body);
  try {
    let newUser = await db.one(
      "INSERT INTO todo (username, name, completed) VALUES ${username}, ${name}, ${completed}) RETURNING *",
      req.body
    );
    res.status(200).json({
      status: "success",
      message: "A new todo is created ",
      payload: newUser
    });
  } catch (err) {
    res.status(404).json({
      status: err,
      message: "todo was not created",
      payload: null
    });
  }
};

const deleteTodo = async (req, res) => {
  try {
    await db.none("DELETE FROM todo WHERE id = $1", req.params.id);
    res.status(200).json({
      status: "success",
      message: "The todo is deleted"
    });
  } catch (err) {
    res.status(404).json({
      status: err,
      message: "The todo was not deleted"
    });
  }
};



module.exports = {
  getTodo,
  createTodo,
  deleteTodo,
  
};