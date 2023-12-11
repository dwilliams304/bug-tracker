const router = require('express').Router();
const Bugs = require('./tasks-model');

router.get('/', (req, res, next) => {
    res.json({message: "Tasks get routed!"});
    next();
})

module.exports = router;