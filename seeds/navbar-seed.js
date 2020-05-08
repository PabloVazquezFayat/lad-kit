require('dotenv').config();
const mongoose = require('mongoose');
const Navbar = require('../models/Navbar');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const navbar = [
    {
        phone: '305-123-4567',
        email: 'orders@ladkit.com',
        address: '1234 sw 123 ave, Miami FL, 33133',
        facebook: 'www.facebook.com',
        twitter: 'www.twitter.com',
        pinterest: 'wwww.pinterest.com',
        instagram: 'www.instagram.com',
        logoImage: 'image',
        logoText: 'logo text',
        pageLinks: [{name: 'home', url: '#home'}],
    },
];
  
Navbar.create(navbar, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${navbar.length} components`)
    mongoose.connection.close();
});