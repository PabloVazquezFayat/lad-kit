const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String, required: true, minlength: 2},
    password: {type: String, required: true, minlength: 5},
    email: {type: String, unique: true, required: true},
    phone: {type: String, unique: true, required: true},
});

const User = mongoose.model('User', userSchema);

module.exports = User;