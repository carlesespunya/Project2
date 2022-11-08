const express = require('express');
const router = express.Router();

const Spot = require("../models/Spot.model")


//GET /spots/spot
router.get("/spot", (req, res) => {
    res.render("spots/spot");
  });
  
  
  //GET /spots/addSpot
  router.get("/addSpot", (req, res) => {
    res.render("spots/addSpot");
  });

  router.get("/:spotId", async (req, res) => {
    const spotId = req.params.spotId
    try {
      const spot = await Spot.findById(spotId)
      console.log(spot)
      res.render("spots/spot", spot)
    }catch (err) {
      console.log(err)
    }
  })


  module.exports = router;