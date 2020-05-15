const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subscribeSchema = new Schema({
    header: {type: String},
    paragraph: {type: String}
});

const Subscribe = mongoose.model('Subscribe', subscribeSchema);

module.exports = Subscribe;