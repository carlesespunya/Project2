const express = require('express');
const router = express.Router();

const Activity = require("../models/Activity.model")


/* GET home page */
router.get("/", async (req, res, next) => {
    try{
      const activityDb = await Activity.find()
       console.log(activityDb)
       res.render("index", {activityDb});
   }catch(err){
       console.log(err)
   }
  });
  



module.exports = router;
