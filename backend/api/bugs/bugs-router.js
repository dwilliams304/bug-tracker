const router = require('express').Router();
const Bugs = require('./bugs-model');

router.get('/', (req, res, next) => {
    res.json({message: "Bugs get routed!"});
    next();
})

module.exports = router;