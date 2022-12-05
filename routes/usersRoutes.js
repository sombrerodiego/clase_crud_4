const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

// Route to get all users
router.get('/', usersController.getAllusers);

// Route create a new product
router.get('/register', usersController.createUser);
router.post('/', usersController.storeUser);