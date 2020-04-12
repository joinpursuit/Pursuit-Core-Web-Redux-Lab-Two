const db = require("../../db/index");

const getTodosById = async (req, res, next) => {
  const { id } = req.params;
  try {
    let todos = await db.one(`SELECT * FROM todos WHERE id = $1`, id);
    res.status(200).json({
      status: "ok",
      todos,
      message: "Retrieved All Todos"
    });
  } catch (error) {
    next(error);
  }
};


module.exports = { getTodosById };
