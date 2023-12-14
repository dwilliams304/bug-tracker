const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    roleID: { type: Number, required: true },
    roleName: { type: String, required: true }
})

module.exports = mongoose.model('Roles', roleSchema);