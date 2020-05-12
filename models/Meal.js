const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mealSchema = new Schema({
    protein: {type: mongoose.Schema.Types.ObjectId, ref: 'Item'},
    sides: [{type: mongoose.Schema.Types.ObjectId, ref: 'Item'}],
    veggies: [{type: mongoose.Schema.Types.ObjectId, ref: 'Item'}],
    feature: {type: Boolean},
    priority: {type: Number},
    basePrice: {type: Number},
});

const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;