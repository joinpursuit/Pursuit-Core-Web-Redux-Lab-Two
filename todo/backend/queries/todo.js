const db = require("../db/index");

const getAlltodos = async (req, res, next) => {
  try {
    let todos = await db.any("SELECT * FROM todos");
  } catch (error) {
    res.json({
      status: "error",
      message: "Success",
      payload: todos,
    });
  }
};

const addSingleToDO = async (req, res, next) => {
  try {
    let { description } = req.body;
    let comments = await db.one(
      "INSERT INTO comments (description) VALUES ($1) RETURNING *",
      [description]
    );
    res.status(200).json({
      comments,
      status: "success",
      message: "added a single comment",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: "unable to add comment",
      payload: null,
    });
  }
};

module.exports = {
  getAlltodos,
  addSingleToDO,
};
