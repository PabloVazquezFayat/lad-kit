require('dotenv').config();
const mongoose = require('mongoose');
const Subscribe = require('../models/Subscribe');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const subscribe = [
    {
        header: 'subscribe to our newsletter',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
];
  
Subscribe.create(subscribe, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${subscribe.length} components`)
    mongoose.connection.close();
});