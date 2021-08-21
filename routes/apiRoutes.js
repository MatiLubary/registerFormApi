const express = require('express');
const router = express.Router();
const db = require("../models");
const path = require('path');

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});

router.post("/new", (req, res) => {
    db.users.create({
        fullName: req.body.fullName,
        dni: req.body.dni,
        password: req.body.password
    }).then(submitedUser => res.send(submitedUser));
})

module.exports = router