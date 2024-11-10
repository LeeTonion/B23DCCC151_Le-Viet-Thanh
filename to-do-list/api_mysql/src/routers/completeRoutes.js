const express = require('express');
const router = express.Router();
const todocompleteController = require('../controllers/completeController');
router.get('/completetodos', todocompleteController.getAllComplete);
router.post('/completetodos', todocompleteController.createComplete);
router.put('/completetodos/:id', todocompleteController.updateComplete);
router.delete('/completetodos/:id',todocompleteController.deleteComplete);
module.exports = router;