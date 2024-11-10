const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = require('./src/routers/todoRoutes');
const userRoutes = require('./src/routers/userRoutes');
const completeRoutes = require('./src/routers/completeRoutes');
const app = express();
const port = 3000;

app.use(bodyParser.json()); 
app.use('/api', todoRoutes); 
app.use('/user',userRoutes)
app.use('/apis',completeRoutes)
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});