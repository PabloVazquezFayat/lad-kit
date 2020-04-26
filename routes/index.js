const express = require('express');
const router = express.Router();
const homePage =require('../controllers/pages/home');

/* GET home page. */
router.get('/', homePage);

module.exports = router;
