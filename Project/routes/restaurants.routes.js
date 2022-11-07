const express = require('express');
const isAdmin = require('../middleware/isAdmin');
const isLoggedIn = require('../middleware/isLoggedIn');
const router = express.Router();
const Restaurant = require("../models/restaurant");



router.get('/restaurants', (req, res) => {
    res.render('restaurants/restaurant-list')
  })
  
router.get('/create-restaurant', (req, res) => {
    res.render('restaurants/restaurant-form', {options: ["Arabic", "Argentinian", "Bar", "Brazilian", "Burgers", "Chinese", "Korean", 
    "Brunch", "Indian", "Japanese", "Indian",  "Kebab", "Mexican", "Italian", "Poke", 
    "Sushi", "Vegan", "Vegetarian", "Vietnamese", "Coffee Shop", 'Steakhouse']})
  })

router.post('/create-restaurant', async (req, res) => {
    const {name, style, address, price, phonenumber, picture, instagram, wifi, coworking, delivery } = req.body
    try {
        const wifiT = Boolean(wifi)
        const cowork = Boolean(coworking)
        const deliv = Boolean(delivery)
        console.log(cowork)
        const newRestaurant = await Restaurant.create({name, style, address, price, phonenumber, picture, instagram, wifi: wifiT, coworking: cowork, delivery: deliv})
        console.log(newRestaurant)
       res.redirect('/restaurants') 
    } catch (error) {
        console.log(error)
    }
})

router.get('/:restaurantId', async (req, res) => {
    const restaurantId = req.params.restaurantId
    try {
        const restaurant = await Restaurant.findById(restaurantId)
        console.log(restaurant)
        res.render('/restaurantCard', restaurant)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router