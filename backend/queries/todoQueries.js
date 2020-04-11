const db = require("../db/index");

const getAllTodos = async (req, res, next) => {
  try {
    const posts = await db.any("SELECT * FROM todos");
    res.json({
      status: "SUCCESS",
      message: "All Posts",
      payload: posts
    });
  } catch (error) {
    res.json({
      status: error,
      message: "ERROR",
      payload: null
    });
  }
};

export default getAllTodos;
