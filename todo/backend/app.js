const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const todoRouter = require("./routes/todo");

const port = 3000;

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/todos", todoRouter);

app.listen(port, () => {
  console.log("listening on port: ", port);
});
