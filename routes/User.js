
const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/', (req, res) => {
    const newUser = new User (({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }))

    newUser
    .save()
    .then(user => res.json(user))
    .catch(err => console.log(err))
       
});

router.get('/', (req, res) => {
    User
    .find()
    .then(users => res.json(users))
    .catch(err => console.log(err))
    
});

module.exports = router;

