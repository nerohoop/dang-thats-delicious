const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

// Do work here
router.get('/', storeController.homePage);
router.get('/add', storeController.editStore);
router.post('/add', storeController.createStore);

module.exports = router;
