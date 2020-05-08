require('dotenv').config();
const mongoose = require('mongoose');
const HeroBannner = require('../models/HeroBanner');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const heroBanner = [
    {
        header: 'Buy food today!',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        cta: {url: '#order', text: 'order now'}
    },
];
  
HeroBannner.create(heroBanner, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${heroBanner.length} components`)
    mongoose.connection.close();
});