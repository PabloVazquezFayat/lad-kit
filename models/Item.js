const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {type: String, unique: true},
    imageURL: {type: String},
    price: {type: Number},
    available: {type: Boolean, default: true},
    kind: {type: String, enum: ["protein", "side", "veggie"]}
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;