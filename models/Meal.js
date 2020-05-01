const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mealSchema = new Schema({
    protein: {type: mongoose.Schema.Types.ObjectId, ref: 'Item'},
    sides: [{type: mongoose.Schema.Types.ObjectId, ref: 'Item'}],
    vegies: [{type: mongoose.Schema.Types.ObjectId, ref: 'Item'}]
});

const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;