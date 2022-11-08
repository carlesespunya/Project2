const express = require("express");
const router = express.Router();

const User = require("../models/User.model")

const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");



router.get("/user-profile", isLoggedIn, (req, res) => {
    const user = req.session.currentUser;
    res.render("user/user-profile", {user});
})



module.exports = router


