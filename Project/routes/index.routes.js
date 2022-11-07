const express = require('express');
const router = express.Router();
//const { default: mongoose } = require('mongoose');
const Comic = require("../models/Comics.model")
const Cart = require('../models/ShoppingCart.model');

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});
// ------------------------ catalogue Routes ------------------------
router.get("/catalogue", async (req, res, next) => {
  //console.log("We are inside the catalogue!")
  try{
  const allComics = await Comic.find()
  //console.log("This are all the comics : ", {allComics})
  res.render("catalogue", {allComics})
  } catch (err) {
    console.log("Error getting catalogue:" + err)
  }
})
// --------------------- Product details Routes ------------------------
router.get("/catalogue/:comicId", async (req, res, next) => {
  try{
    const comic = await Comic.findById(req.params.comicId)
    res.render("product-details", comic)
  } catch (err){
    console.log("Error getting product details:" + err)
  }
  
})
// --------------------- Shopping Cart Routes ------------------------

//------TEST -----
router.get('/catalogue/add-to-cart/:id', function (req, res) {
  const comicId = req.params.id;
  const cart = new Cart(req.session.cart ? req.session.cart : {});

  Comic.findById(comicId, function (err, comic) {
      if(err) {
          return res.redirect('/');
      }
      cart.add(comic, comic.id);
      req.session.cart = cart;
      console.log("Comic added!");
      res.redirect('/catalogue');
  })
});

router.get('/cart', function (req, res, next) {
  if(!req.session.cart) {
      return res.render('/cart', {products: null});
  }
  const cart = new Cart(req.session.cart);
  return res.render("cart", {products: cart.generateArray(), totalPrice: cart.totalPrice});
});

//remove items from cart

router.get('/cart/remove/:id', function (req, res, next) {
  const comicId = req.params.id;
  const cart = new Cart(req.session.cart ? req.session.cart : {});
  cart.removeItem(comicId);
  req.session.cart = cart;
  res.redirect('/cart');
});


module.exports = router;
