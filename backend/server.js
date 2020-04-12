const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;

const todosRouter = require('../backend/routes/todos');

app.use('/todos', todosRouter);

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.listen(port, () => `listening on port ${port}`)