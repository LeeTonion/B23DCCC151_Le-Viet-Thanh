const User = require('../models/user');

exports.getAllUsers = (req, res) => {
    User.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json(results);
    });
};

exports.createUsers = (req, res) => {
    const { name,password } = req.body;
    User.create(name, password, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({message: 'Todo created successfully'});
    });
};

exports.updateUsers = (req, res) => {
    const { id } = req.params;
    const { name, password} = req.body;
    User.update(id, name,password, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({message: 'Todo updated successfully'});
    });
};

exports.deleteUsers = (req, res) => {
    const { id } = req.params;
    User.delete(id, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({message: 'Todo delete successfully'});
    });
};
