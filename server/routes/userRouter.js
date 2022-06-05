// Router is like a mini-app
// Create Router as a module, define some routes & mount the router module on a path in the main app
//In the main app app.use('/birds', birds) App will able to handle requests to /birds, /birds/about, etc
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.js');

// Import Controller
const userController = require('../controllers/userController.js');

//Register a User(POST request)
router.post('/register', userController.registerUser);

//Login a User(POST request)
router.post('/login', userController.loginUser);

// verify Token
router.get('/verify', userController.verifiedToken);

module.exports = router;
