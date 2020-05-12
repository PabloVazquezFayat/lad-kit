require('dotenv').config();
const mongoose = require('mongoose');
const Meal = require('../models/Meal');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const meals = [
    {
        name: 'Chicken Meal',
        protein: '5ebb127dad86cd7e5bf0b4d5',
        sides: ['5ebb13a043e4e87f2679e506', '5ebb127dad86cd7e5bf0b4d7'],
        veggies: ['5ebb127dad86cd7e5bf0b4d9', '5ebb127dad86cd7e5bf0b4da'],
        feature: true,
        priority: 0,
        basePrice: 7.0,
    },
    {
        name: 'Beefy Meal',
        protein: '5ebb127dad86cd7e5bf0b4d6',
        sides: ['5ebb13a043e4e87f2679e506', '5ebb127dad86cd7e5bf0b4d8'],
        veggies: ['5ebb127dad86cd7e5bf0b4d9', '5ebb127dad86cd7e5bf0b4da'],
        feature: true,
        priority: 1,
        basePrice: 7.0,
        popular: 'Most Popular'
    },
    {
        name: 'Fish Meal',
        protein: '5ebb15bb17d9047fd3e425a8',
        sides: ['5ebb13a043e4e87f2679e506', '5ebb127dad86cd7e5bf0b4d7'],
        veggies: ['5ebb127dad86cd7e5bf0b4db'],
        feature: true,
        priority: 2,
        basePrice: 7.0,
    }
];
  
Meal.create(meals, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${meals.length} components`)
    mongoose.connection.close();
});