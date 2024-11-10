const db = require('../configs/Database');

const Todo = {
    getAll: (callback) => {
        db.query('SELECT * FROM todos', callback);
    },
    create: (title, description, due_date, callback) => {
        db.query('INSERT INTO todos (title, description, due_date) VALUES (?, ?, ?)', [title, description, due_date], callback);
    },
    update: (id, title, description, due_date, callback) => {
        // Xóa dấu phẩy thừa sau due_date
        db.query('UPDATE todos SET title = ?, description = ?, due_date = ? WHERE id = ?', [title, description, due_date, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM todos WHERE id = ?', [id], callback);
    }
};



module.exports = Todo;