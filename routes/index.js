const express = require('express');
const router = express.Router();
const users = require('../users.json')

router.get('/', (req, res)=> {
    res.render('index');
});

router.get('/play', (req, res) => {
    res.render('play');
});

router.get('/users', (req, res) => {
    res.json(users)
});

router.post('/login', (req, res) => {
    res.json(users)
});

module.exports = router;