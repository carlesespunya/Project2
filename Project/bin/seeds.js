const mongoose = require("mongoose")

const Activity = require("../models/Activity.model")

const MONGO_URI = "mongodb://localhost:27017/project2"

const activities = [
  {
    activity: "Hiking", 
    description: "Making a pilgrimage to Montserrat.",
    find: ["group of friends"],
    from: "11-11-2022",
    to: "11-11-2022",
  },
  {
    activity: "Drinks", 
    description: "Looking to go out for some drinks on top of Barcelona",
    find: ["date"],
    from: "11-11-2022",
    to: "11-11-2022",
  },
  {
    activity: "Lunch", 
    description: "Tapas hopping around Barcelona",
    find: ["couple"],
    from: "11-11-2022",
    to: "11-11-2022",
  }
]

const createActivities = async function () {
  try {
    const connect = await mongoose.connect(MONGO_URI)
    console.log("Test")
    console.log(`Connected to database: ${connect.connections[0].name}`)

    const deleteAll = await Activity.deleteMany()
    console.log("Db clean")

    const dbActivities = await Activity.create(activities)
    console.log(`activities created`)

    const dbClose = await mongoose.connection.close()
    console.log("Seeds created") 

  } catch (error) {
    console.log(error)
  }
}

createActivities()




// const createSeeds = async function () {
//   try {
//     const connect = await mongoose.connect(MONGO_URI)
//     console.log(`Connected to database: ${connect.connections[0].name}`)

//     // Clear DB,  Example: (-- const deleteAll = await Book.deleteMany() --)
//     // console.log("Db clean")

//     const dbClose = await mongoose.connection.close()
//     console.log("Seeds created")
//   } catch (err) {
//     console.log(`Error creating the seeds: ${err}`)
//   }
// }

// createSeeds()
