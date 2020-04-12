const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const port = 3001;
const path = require("path");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/addTodo", addTodoRouter);
app.use("/filterTodo", filterTodoRouter);


app.use((error, req, res, next) => {
  if (error.status) {
    res.status(error.status).json(error);
  } else {
    res.json(error);
  }
});


app.listen(port, () => {
  console.log(`Server Is Running On Port:${port}`);
});
