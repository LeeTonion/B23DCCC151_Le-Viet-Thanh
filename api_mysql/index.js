const express = require('express');
const app = express();
const port = 3002;
const todosRouter = require('./src/routers/todolist');

app.use(express.json());

app.use('/todos', todosRouter);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});