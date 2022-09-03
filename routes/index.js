const express = require('express');
const router = express.Router();
const users = require('../users.json')

router.get('/', (req, res)=> {
    res.render('index');
});

router.get('/play', (req, res) => {
    res.render('play');
});

router.post('/login', (req, res) => {
    // ...logic untuk login
    res.json(users)
});

module.exports = router;