const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {type: String, unique: true},
    imageURL: {type: String},
    price: {type: String},
    available: {type: Boolean, default: true},
    kind: {type: String, enum: [protein, side, vegie]}
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;