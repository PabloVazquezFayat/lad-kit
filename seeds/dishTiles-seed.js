require('dotenv').config();
const mongoose = require('mongoose');
const DishTiles = require('../models/DishTiles');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const dishTiles = [
    {
        header: 'Our Special Dishes',
        paragraph: 'Recommended',
    },
];
  
DishTiles.create(dishTiles, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${dishTiles.length} components`)
    mongoose.connection.close();
});