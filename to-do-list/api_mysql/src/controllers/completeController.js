const TodoComplete = require('../models/complete');

exports.getAllComplete = (req, res) => {
    TodoComplete.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json(results);
    });
};

exports.createComplete = (req, res) => {
    const { title, description, due_date } = req.body;
    TodoComplete.create(title, description, due_date, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({message: 'TodoComplete created successfully'});
    });
};

exports.updateComplete = (req, res) => {
    const { id } = req.params;
    const { title, description, due_date } = req.body;
    TodoComplete.update(id, title, description, due_date, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({message: 'TodoComplete updated successfully'});
    });
};

exports.deleteComplete = (req, res) => {
    const { id } = req.params;
    TodoComplete.delete(id, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({message: 'TodoComplete delete successfully'});
    });
};