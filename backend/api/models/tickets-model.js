const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
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
    ticketAssignees: [
        
    ],
    ticketStatus: {
        type: String,
        required: true
    },
    ticketDaysOpen: {
        type: Number,
        required: false
    },
    ticketTags: []
})

module.exports = mongoose.model('Tickets', ticketSchema);