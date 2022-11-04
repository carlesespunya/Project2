const express = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});


// GET // User Profile
router.get('/profile', isLoggedIn, (req, res) => {
  res.render('user/profile')
})

router.get('/restaurants', (req, res) => {
  res.render('restaurants/restaurant-list')
})


module.exports = router;
