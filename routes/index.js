const express = require('express');
const router = express.Router();
const homePage = require('../controllers/pages/home');
const orderPage = require('../controllers/pages/order');

const createSubscriber = require('../controllers/subscribers/subscriber-create');

//GET home page
router.get('/', homePage);

//GET order page
router.get('/order', orderPage);

//POST subscribe
router.post('/subscribe', createSubscriber);

module.exports = router;
