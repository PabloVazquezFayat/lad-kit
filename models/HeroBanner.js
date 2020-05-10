const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const heroBannerSchema = new Schema({
    header: {type: String},
    paragraph: {type: String},
    cta: {url: {type: String}, text: {type: String}},
    backgroundImage: {type: String}
});

const HeroBanner = mongoose.model('HeroBanner', heroBannerSchema);

module.exports = HeroBanner;