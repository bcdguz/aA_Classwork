const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require('../../models/User');

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
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    })
                })
            }
        })
})

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

module.exports = router;