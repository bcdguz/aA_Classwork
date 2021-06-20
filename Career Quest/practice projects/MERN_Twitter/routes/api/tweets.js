const express = require("express");
const Tweet = require("../../models/Tweet");
const router = express.Router();

router.get('/', (req, res) => {
    Tweet.find()
        .sort({date: -1})
        .then(tweets => res.json(tweets))
        .catch(err => res.status(404).json({notweetsfound: 'No tweets found'}))
})

router.get('/user/:user_id', (req, res) => {
    Tweet.find({user: req.params.user_id})
        .then(tweets => res.json(tweets))
        .catch(err => res.status(404).json({notweetsfound: 'No tweets found'}))
})

router.get('/:id', (req, res) => {
    Tweet.findById(req.params.id)
        .then(tweet => res.json(tweet))
        .catch(err => res.status(404).json({ notweetsfound: 'No tweet with that ID' }))
})

module.exports = router;