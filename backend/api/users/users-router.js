const router = require('express').Router();
const Bugs = require('./users-model');

router.get('/', (req, res, next) => {
    res.json({message: "Users get routed!"});
    next();
})

module.exports = router;