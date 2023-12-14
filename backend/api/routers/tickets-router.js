const router = require('express').Router();
const Bugs = require('../models/tickets-model');

router.get('/', (req, res, next) => {
    res.json({message: "Tickets get routed!"});
    next();
})

module.exports = router;