require('dotenv').config();
const mongoose = require('mongoose');
const Footer = require('../models/Footer');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const footer = [
    {
        backgroundImage: '/images/blackboard.jpg',
        address: {
            header: 'Our Address',
            paragraph: '1234 SW 123rd St. Miami, Fl 33133'
        },
        hours: {
            header: 'Hours',
            week: 'Mon-Fri: 9:00AM - 6:00PM',
            weekend: 'Sat: 11:AM - 6:00PM',
        },
        contact: {
            header: 'Contact Us',
            email: 'food@food.com',
            phone: '305-123-1234'
        },
        copyright: '2020 Ladkit, LLC, All Rights Reserved.'
    }
];

Footer.create(footer, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${footer.length} components`)
    mongoose.connection.close();
});