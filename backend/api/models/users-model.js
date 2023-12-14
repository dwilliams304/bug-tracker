const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    role: {type: Number, required: true},
    email: {type: String, required: true},
    img: {type: String, required: false}
})

module.exports = mongoose.model('Users', userSchema);