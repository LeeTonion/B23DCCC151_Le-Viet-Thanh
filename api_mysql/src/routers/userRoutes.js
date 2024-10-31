const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUsers);
router.put('/users/:id', userController.updateUsers);
router.delete('/users/:id', userController.deleteUsers);
module.exports = router;