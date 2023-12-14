const router = require('express').Router();
const Tickets = require('../models/tickets-model');

router.get('/', (req, res, next) => {
    res.json({message: "Tickets get routed!"});
    next();
})

router.post('/', async (req, res, next) => {
    const ticket = new Tickets({
        projectID: req.body.project,
        ticketTitle: req.body.title,
        ticketSeverity: req.body.severity,
        ticketStatus: req.body.status,
    })

    try{
        const newTicket = await ticket.save();
        res.status(201).json(newTicket);
    }
    catch(err){
        res.status(400).json({message: "Error, idiot"})
    }
})

module.exports = router;