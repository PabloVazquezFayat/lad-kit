require('dotenv').config();
const mongoose = require('mongoose');
const Meal = require('../models/Meal');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const meals = [
    {
        protein: {type: mongoose.Schema.Types.ObjectId, ref: 'Item'},
        sides: [{type: mongoose.Schema.Types.ObjectId, ref: 'Item'}],
        vegies: [{type: mongoose.Schema.Types.ObjectId, ref: 'Item'}],
        feature: {type: Boolean},
        priority: {type: Number},
    },
    {
        protein: {type: mongoose.Schema.Types.ObjectId, ref: 'Item'},
        sides: [{type: mongoose.Schema.Types.ObjectId, ref: 'Item'}],
        vegies: [{type: mongoose.Schema.Types.ObjectId, ref: 'Item'}],
        feature: {type: Boolean},
        priority: {type: Number},
    },
    {
        protein: {type: mongoose.Schema.Types.ObjectId, ref: 'Item'},
        sides: [{type: mongoose.Schema.Types.ObjectId, ref: 'Item'}],
        vegies: [{type: mongoose.Schema.Types.ObjectId, ref: 'Item'}],
        feature: {type: Boolean},
        priority: {type: Number},
    }
];
  
Meal.create(meals, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${meals.length} components`)
    mongoose.connection.close();
});