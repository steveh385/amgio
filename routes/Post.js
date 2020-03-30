const Post = require('../models/Post');
const express = require('express');


const router = express.Router();


router.post('/', (req, res) => {
    User
    .findOne({email: req.body.email})
    .then( user => {
        console.log("User found", user );
        if (user) {
            const newPost = new Post({
                message: req.body.message,
                user: user
            })
            newPost
                .save()
                .then(post => res.json (post))
                .catch(err => res.json(err))
        } else {
            return res.status(400).json({message: "User not found"})
        }
    })
});

router.get('/', (req, res) => {
    Post
        .find()
        .then(post => res.json(post))
        .catch(err => console.log(err))
});

module.exports = router;