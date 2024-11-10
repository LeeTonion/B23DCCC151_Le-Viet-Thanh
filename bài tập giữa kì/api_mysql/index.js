const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = require('./src/routers/todoRoutes');

const completeRoutes = require('./src/routers/completeRoutes');
const app = express();
const port = 3000;

app.use(bodyParser.json()); 
app.use('/api', todoRoutes); 

app.use('/apis',completeRoutes)
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});