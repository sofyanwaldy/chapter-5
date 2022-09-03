const express = require('express');
const router = express.Router();
const users = require('../users.json');

router.get('/users', (req, res) => {
    const result = {
        message: 'success',
        data: users
    }
    res.json(result);
});

router.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    const user = users.find((user) => user.id === userId);

    if (!user) {
        return res.status(404).send({
            message: 'user not found'
        })
    }
    return res.json({
        message: 'success',
        data: user
    })
});

router.post('/users', (req, res) => {
    // ... logic simpan data
    const body = req.body;
    const { username, name, password } = body;
    const lastId = users.length + 1;

    users.push({
        id: lastId.toString(),
        name: name,
        username: username,
        password: password
    })
    res.status(201).json({
        message: 'success',
        data: users
    })
});


router.put('/users/:userId', (req, res) => {
    const body = req.body;
    const userId = req.params.userId;

    const user = users.find((user) => {
        return user.id == userId
    });

    user.name = body.name;
    user.username = body.username;

    const result = {
        status: 200,
        message: 'updated',
        data: user
    };
    res.status(200).json(result)
});

router.delete('/users/:userId', (req, res) => {
    // ...logic delete
    const userId = req.params.userId;
    // user.remove()
    const user = users.filter((user) => user.id !== userId);
    res.json({
        message: 'deleted',
        data: user
    });
});

module.exports = router;