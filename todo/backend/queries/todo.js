const db = require("../db/index");

const getAlltodos = async (req, res, next) => {
  try {
    let todos = await db.any("SELECT * FROM todos");
    res.json({
      status: "Success",
      message: "got ALL todos",
      payload: todos,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: "Could not get todos",
    });
  }
};

const addSingleToDO = async (req, res, next) => {
  try {
    let { description } = req.body;
    let todo = await db.one(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    );
    res.status(200).json({
      todo,
      status: "success",
      message: "added a single todo",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: "unable to add todo",
      payload: null,
    });
  }
};

module.exports = {
  getAlltodos,
  addSingleToDO,
};
