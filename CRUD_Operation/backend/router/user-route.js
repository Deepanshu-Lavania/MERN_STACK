const express = require('express');
const {Home, About} = require('../controllers/user-controller');
const router = express.Router();

// respond with "hello world" when a GET request is made to the homepage
router.get('/', Home)
router.get('/about', About)

module.exports = router;