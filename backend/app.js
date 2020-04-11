const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;


// Router things
const toDoRouter =  require("./routes/toDoRoutes")

// app.use stuff 
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/todo", toDoRouter)



// app.use("/toDo", toDoRouter)


app.listen(port, () => {
    console.log("App is listening on port " + port)
})