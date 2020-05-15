const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const footerSchema = new Schema({
    backgroundImage: {type: String},
    address: {
        header: {type: String},
        paragraph: {type: String}
    },
    hours: {
        header: {type: String},
        week: {type: String},
        weekend: {type: String},
    },
    contact: {
        header: {type: String},
        email: {type: String},
        phone: {type: String}
    },
    copyright: {type: String}
});

const Footer = mongoose.model('Footer', footerSchema);

module.exports = Footer;