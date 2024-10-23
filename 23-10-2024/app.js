const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})
const users =
[
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'John e'},
]
users.forEach(users=> {
    if (users.id == 2){
        users.name = "hfehfehwifuhew"
    }
    
});
app.get('/users',(req,res)=>{
    res.json({
        message: 'Tên người dùng đã được thay đổi',
        data: users
})
})
app.get('/users',(req,res)=>{
    res.json({
        message: 'Tên người dùng đã được thay đổi',
        data: users
})
})