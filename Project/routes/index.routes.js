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



module.exports = router;
