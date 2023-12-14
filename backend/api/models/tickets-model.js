const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    projectID: {
        type: String,
        required: true
    },
    ticketID: {
        type: String,
        required: true
    },
    ticketTitle: {
        type: String,
        required: true
    },
    ticketCreation: {
        type: Date,
        required: true,
        default: Date.now
    },
    ticketSeverity: {
        type: String,
        required: true
    },
    ticketAssignees: [{
        userName: String,
        userID: Number,
    }],
    ticketStatus: {
        type: String,
        required: true
    },
    ticketDaysOpen: {
        type: Number,
        required: true
    },
    ticketTags: [{
        type: String,
        required: false
    }]
})

module.exports = mongoose.model('Tickets', ticketSchema);