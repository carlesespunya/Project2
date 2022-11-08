const express = require('express');
const router = express.Router();

const Comic = require("../models/Comics.model");
const Item = require('../models/Items.model');
const Cart = require('../models/ShoppingCart.model');

const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");



router.get("/cart", isLoggedIn, async (req, res, next) => {
  try{
    const currUser = req.session.currentUser
    const findCarrito = await Cart.findOne({ userId: currUser})
    //console.log(findCarrito)
    const carritoItems = await Item.find({cartId: findCarrito._id}).populate('comicId')
    res.render("cart", {carritoItems}) 
  }
  catch(err){
    console.log(err)
  }
})

// router.get("/cart", async (req, res) => {
//   console.log("Done")
//   try {
//     const user = req.session.currentUser
//     const carrito = await Cart.findOne({userId: user})
//     const carrItems = await Item.find({cartId: carrito._id})
//     res.render("cart", carrItems)
//   } catch (err) {
//     console.log(err)
//   }
//   console.log("carttt")
// })




/* GET home page */
router.get("/", (req, res, next) => {
  const user = req.session.currentUser
  res.render("index", {user});
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

//CART ROUTES

router.post("/catalogue/:comicId/add", isLoggedIn, async (req, res, next) => {
  //console.log("we are inside!")
  const currUser = req.session.currentUser
  console.log(currUser)

  const {comicId} = req.params

  try{
    const newItem = await Item.create({comicId})
    console.log(newItem)
    const findCarrito = await Cart.findOne({ userId: currUser})
    console.log(findCarrito)
    const addItemtoCarro = await Item.updateMany({newItem, cartId: findCarrito})
    console.log(addItemtoCarro)
    res.redirect("/catalogue")
  }
  catch(err){console.log(err)}
})

//delete item from the cart
  router.post("/cart/:itemId/delete", isLoggedIn, async (req, res, next) => {
    const {itemId} = req.params
    try {
      const deleteItem = await Item.deleteOne({itemId})
      res.redirect("/cart")
    }
    catch(err){
      console.log(err)
    } 
  })

  //checkout route
  router.post("/cart/checkout", isLoggedIn, async (req, res, next) => {
    const currUser = req.session.currentUser
    //res.redirect("/cart/checkout")
    try {
      const findCarrito = await Cart.findOne({ userId: currUser})
      const deleteAll = await Item.deleteMany({cartId: findCarrito})
      res.redirect("/cart/checkout")
      }
    catch(err){
       console.log(err)
     } 
  })
  router.get("/cart/checkout", isLoggedIn, async (req, res, next) => {
    res.render("checkout")
  })




module.exports = router;
