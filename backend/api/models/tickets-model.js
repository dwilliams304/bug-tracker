const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    projectID: {
        type: Number,
        required: false,
        default: 0
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
    ticketAssignees: [
        { type: Schema.Types.ObjectId, ref: 'Users' }
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