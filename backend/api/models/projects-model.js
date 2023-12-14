const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {type: String, required: true, default: "Default Project"},
    color: {type: String, required: false, default: "#000000"}
})

module.exports = mongoose.model('Projects', projectSchema);