const express = require('express');
const router = express.Router();

const Activity = require("../models/Activity.model")
const isLoggedIn = require("../middleware/isLoggedIn");
const isLoggedOut = require("../middleware/isLoggedOut");

/* GET home page */



router.get("/create", (req, res) => {
  const user = req.session.currentUser
  res.render("activity/new-activity", {user})
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


router.get("/description/:activityId", async (req, res) => {
  const user = req.session.currentUser;
  const {activityId}  = req.params
  try{
    const actId = await Activity.findById(activityId)
    console.log(actId)
    res.render("activity/activity-description", {actId, user})
  }catch(err){
     console.log(err)
  }
});



router.get('/edit/:activityId', async (req, res) => {
  const user = req.session.currentUser;
  const { activityId } = req.params
  try{
  const actiDb = await Activity.findById(activityId)
  res.render("activity/edit-activity", {actiDb,user})
}catch(err){
  console.log(err)
}
});

router.post('/edit/:activityId', async (req, res, next) => {
  const { activityId } = req.params;
  console.log(activityId)
  const { name, description} = req.body;
  console.log(name)
  console.log(description)

  try{
  const actiDb = await Activity.findByIdAndUpdate(activityId, { name, description}, { new: true })
  res.redirect(`/`)

  }catch(err){
    console.log(err)
  }
});

router.post('/description/:activityId/delete', async (req, res) => {
  const {activityId}  = req.params;
 try{
    const deletedb = await Activity.findByIdAndDelete(activityId)
    res.redirect('/')
 }catch(errr){
    console.log(errr);
 } 
 
    
});


module.exports = router



