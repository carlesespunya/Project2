const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});
// ------------------------ catalogue Routes ------------------------
router.get("/catalogue", (req, res, next) => {
  res.render("catalogue")
})
// --------------------- Product details Routes ------------------------
router.get("/product-details", (req, res, next) => {
  res.render("product-details")
})


module.exports = router;
