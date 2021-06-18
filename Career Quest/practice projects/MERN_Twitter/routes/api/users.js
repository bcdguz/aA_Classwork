const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

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
                            .then(user => {
                                const payload = { id: user.id, handle: user.handle };

                                jwt.sign(
                                    payload,
                                    keys.secretOrKey,
                                    { expiresIn: 3600 },
                                    (err, token) => {
                                        res.json({
                                            success: true,
                                            token: 'Bearer ' + token
                                        });
                                    });
                            })
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
                        const payload = {id: user.id, handle:user.handle};

                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            {expiresIn: 3600},
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: 'Bearer ' + token
                                });
                            });
                    } else {
                        return res.status(400).json({password: 'Incorrect password'});
                    }
                })
        })
})

//private route to get a user
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        handle: req.user.handle,
        email: req.user.email
    });
})


module.exports = router;