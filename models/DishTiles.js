const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishTilesSchema = new Schema({
    header: {type: String},
    paragraph: {type: String}
});

const DishTiles = mongoose.model('DishTiles', dishTilesSchema);

module.exports = DishTiles;