const express = require('express');
const router = express.Router();

const Activity = require("../models/Activity.model")

/* GET home page */
router.get("/homepage", (req, res) => {
  res.render("activity/homepage");
});

router.get("/homepage/create", (req, res) => {
    res.render("activity/new-activity")
})

router.post("/homepage/create", async (req, res) => {
  const {name, description} = req.body
  
  try{
      const newActivity = await Activity.create({name, description})
      console.log(newActivity)
      res.redirect("/homepage", newActivity)
  }catch (err){
      console.log(err)
      res.render("homepage/new-activity")
  }
})

module.exports = router


