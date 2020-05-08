const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const navbarSchema = new Schema({
    phone: {type: String},
    email: {type: String},
    address: {type: String},
    facebook: {type: String},
    twitter: {type: String},
    pinterest: {type: String},
    instagram: {type: String},
    logoImage: {type: String},
    logoText: {type: String},
    pageLinks: [{name: {type: String}, url: {type: String}}]
});

const Navbar = mongoose.model('Navbar', navbarSchema);

module.exports = Navbar;