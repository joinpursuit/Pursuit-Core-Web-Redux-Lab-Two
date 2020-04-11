const db = require("../db/db");

const getTodo = async (req, res) => {
  try {
    let user = await db.one(
      "SELECT * FROM users WHERE username = $1",
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
      "INSERT INTO users (fullname, username, email, age, profile_pic) VALUES(${fullname}, ${username}, ${email}, ${age}, ${profile_pic}) RETURNING *",
      req.body
    );
    res.status(200).json({
      status: "success",
      message: "A new user is created ",
      payload: newUser
    });
  } catch (err) {
    res.status(404).json({
      status: err,
      message: "user was not created",
      payload: null
    });
  }
};

const deleteTodo = async (req, res) => {
  try {
    await db.none("DELETE FROM users WHERE id = $1", req.params.id);
    res.status(200).json({
      status: "success",
      message: "The user is deleted"
    });
  } catch (err) {
    res.status(404).json({
      status: err,
      message: "The user was not deleted"
    });
  }
};



module.exports = {
  getTodo,
  createTodo,
  deleteTodo,
  
};