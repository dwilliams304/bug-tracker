const router = require('express').Router();

router.post('/login', (req, res, next) => {
    res.json({message: "Auth login routed!"});
    next();
})

router.post('/register', (req, res, next) => {
    res.json({message: "Auth register routed!"});
    next();
})

module.exports = router;