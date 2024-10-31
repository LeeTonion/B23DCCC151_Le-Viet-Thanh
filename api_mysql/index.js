const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = require('./src/routers/todoRoutes');
const userRoutes = require('./src/routers/userRoutes');
const app = express();
const port = 3002;

app.use(bodyParser.json()); 
app.use('/api', todoRoutes); 
app.use('/user',userRoutes)
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});