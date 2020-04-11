const db = require("../db/index")

const addNewTodo = async (req, res, next) => {
    try {
       let { text } = req.body 
       let new_todo = await db.one(
           "INSERT INTO todo (text) VALUES ($1) RETURNING *",
           [text]
       );
       res.status(200).json({
           success: "Success",
           message: "Created a single toDo",
           body: {new_todo}
       })
    } catch (error) {
        next(error)
    }
}

const fetchTodos = async (req, res, next) => {
    try {
        let todos = await db.any("SELECT * FROM todo")
            res.status(200).json({
                success: "Success",
                message: "Fetched all Todo's!",
                body: {todos}
            })
    } catch (error) {
            res.status(404).json({
                message: "No todos found.."
            })
        next(error)
    }
}


module.exports = {
    addNewTodo,
    fetchTodos
}