const db = require('../configs/Database');

const CompleteTodo = {
    getAll: (callback) => {
        db.query('SELECT * FROM completetodos', callback);
    },
    create: (title, description, due_date, callback) => {
        db.query('INSERT INTO completetodos (title, description, due_date) VALUES (?, ?, ?)', [title, description, due_date], callback);
    },
    update: (id, title,description, due_date, callback) => {
        db.query('UPDATE completetodos SET title = ?, description = ?, due_date = ? WHERE id = ?', [title, description, due_date, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM completetodos WHERE id = ?', [id], callback);
    }
};

module.exports = CompleteTodo;