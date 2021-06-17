const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

//new user
router.post("/register", (req, res) => {
    User.findOne({email: req.body.email})
        .then(user => {
            if (user) {
                return res.status(400).json({email: "A user has already registerd with this email"});
            } else {
                const newUser = new User({
                    email: req.body.email,
                    handle: req.body.handle,
                    password: req.body.password
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) {throw err};
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(error => console.log(error));
                    })
                })
            }
        })
})

//login
router.post("/login", (req, res) => {
    const email = req.body.email;
    const pass = req.body.password;

    User.findOne({email})
        .then(user => {
            if (!user) {
                return res.status(404).json({email: 'This user does not exist'});
            }

            bcrypt.compare(pass, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        res.json({msg: 'Success'});
                    } else {
                        return res.status(400).json({password: 'Incorrect password'});
                    }
                })
        })
})

module.exports = router;