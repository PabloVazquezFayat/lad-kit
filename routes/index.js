const express = require('express');
const router = express.Router();
const homePage = require('../controllers/pages/home');

const createSubscriber = require('../controllers/subscribers/subscriber-create');

//GET home page
router.get('/', homePage);

//POST subscribe
router.post('/subscribe', createSubscriber);

module.exports = router;
