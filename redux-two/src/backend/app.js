const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3000;
const createTodo= require("./routes")

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/todo", createTodo);



app.use((error, req, res, next) => {
  if (error.status) {
    res.status(error.status).json(error);
  } else {
    res.json(error);
  }
});


app.listen(port, () => {
  console.log(`Server on Port:${port}`);
});