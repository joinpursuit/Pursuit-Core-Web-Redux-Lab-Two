const db = require("../../db/index");

const getTodos = async (req, res, next) => {
 
  try {
    let todos = await db.any(`SELECT * FROM todos`);
    res.status(200).json({
      status: "ok",
      payload: todos,
      message: "Retrieved All Todos"
    });
  } catch (error) {
    next(error);
  }
};
const addTodo = async (req, res, next) => {
  try {
    
  }catch (error) {
    next(error);
  }
}

module.exports = { getTodos };
