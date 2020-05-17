const { Router } = require('express');
const LogEntry = require('../Models/logEntry');

const router = new Router();

router.get('/', async (req, res) => {
    try {
        const entries = await LogEntry.find({})
        res.status(200).json(entries);
    }
    catch (exp) {
        next(exp);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const logEntry = new LogEntry(req.body);
        const createdEntry = await logEntry.save();
        res.json(createdEntry);
    }
    catch (exp) {
        if (exp.name === "ValidationError")
            res.status(422);
        next(exp)
    }
})

module.exports = router;