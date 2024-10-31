const db = require('../configs/Database');

const User = {
    getAll: (callback) => {
        db.query('SELECT * FROM users', callback);
    },
    create: (name, password, callback) => {
        db.query('INSERT INTO users (name,password) VALUES (?, ?)', [name, password], callback);
    },
    update: (id, name, password, callback) => {
        db.query('UPDATE users SET name = ?, password = ?,  WHERE id = ?', [name, password, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM user WHERE id = ?', [id], callback);
    }
};

module.exports = User;