const express = require('express');
const router = express.Router();

const Activity = require("../models/Activity.model")

/* GET home page */

router.get("/create", (req, res) => {
    res.render("activity/new-activity")
})



router.post("/create", async (req, res) => {
  const {name, description, _id} = req.body
  
  try{
      const newActivity = await Activity.create({name, description, _id})
     
      res.redirect("/")
  }catch (err){
      console.log(err)
      res.render("activity/new-activity")
  }
})

router.get("/", async (req, res) => {
  try{
    const activityDb = await Activity.find()
     res.render("views/index", {activityDb});
 }catch(err){
     console.log(err)
 }
});

router.get("/description/:activityId", async (req, res) => {
  const {activityId}  = req.params
  console.log(activityId)
  try{
    const actId = await Activity.findById(activityId)
    console.log(actId)
    res.render("activity/activity-description", actId)
  }catch(err){
     console.log(err)
  }
});


module.exports = router



