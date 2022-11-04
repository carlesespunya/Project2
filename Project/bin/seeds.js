const mongoose = require("mongoose")

// Require the models,  Example: (-- const Book = require("../models/Book.model") --)
const Comic = require("../models/Comics.model")

const MONGO_URI = "mongodb://localhost:27017/vintageComicShop"

const comic = [
  {
    title: "The Batman Meets Doctor Death",
    img: "https://files1.comics.org//img/gcd/covers_by_id/5/w400/5137.jpg?-3164861915678165786",
    author: "Book Kane",
    comicSeries: "Detective Comics",
    year: 1939,
    condition: "Used",
    synopsis: "Dr. Death plans to use his new invention of a poisonous pollen extract on any wealthy person who refuses to pay him tribute.",
    price: 16.99,
    reviewIds: [{ type: Schema.Types.ObjectId, ref: 'Review'}],
    quantity: 4
  },
  
  {
    title: "Les Cigares du Pharaon",
    img: "https://files1.comics.org//img/gcd/covers_by_id/1493/w400/1493274.jpg?1117383809191476521",
    author: "Hergé",
    comicSeries: "Les Aventures de Tintin",
    year: 1987,
    condition: "Good",
    synopsis: "Holidaying on a Mediterranean cruise ship, Tintin and his dog Snowy meet wealthy film producer Rastapopoulos and eccentric Egyptologist Sophocles Sarcophagus",
    price: 9.99,
    reviewIds: [{ type: Schema.Types.ObjectId, ref: 'Review'}],
    quantity: 6},
    
    {
    title: "Action Comics No. 40",
    img: "https://files1.comics.org//img/gcd/covers_by_id/0/w400/565.jpg?-6831418524261450474",
    author: "Fred Ray",
    comicSeries: "Action Comics",
    year: "1938" ,
    condition: "Used",
    synopsis: "",
    price: Number,
    reviewIds: [{ type: Schema.Types.ObjectId, ref: 'Review'}],
    quantity: Number
    },
    {
      title: String,
    img: String,
    author: String,
    comicSeries: String,
    year: Number,
    condition: String,
    synopsis: String,
    price: Number,
    reviewIds: [{ type: Schema.Types.ObjectId, ref: 'Review'}],
    quantity: Number
    },
    {
      title: String,
    img: String,
    author: String,
    comicSeries: String,
    year: Number,
    condition: String,
    synopsis: String,
    price: Number,
    reviewIds: [{ type: Schema.Types.ObjectId, ref: 'Review'}],
    quantity: Number
    },
    {
      title: String,
    img: String,
    author: String,
    comicSeries: String,
    year: Number,
    condition: String,
    synopsis: String,
    price: Number,
    reviewIds: [{ type: Schema.Types.ObjectId, ref: 'Review'}],
    quantity: Number
    },
    {
      title: String,
    img: String,
    author: String,
    comicSeries: String,
    year: Number,
    condition: String,
    synopsis: String,
    price: Number,
    reviewIds: [{ type: Schema.Types.ObjectId, ref: 'Review'}],
    quantity: Number
    },
    {
      title: String,
    img: String,
    author: String,
    comicSeries: String,
    year: Number,
    condition: String,
    synopsis: String,
    price: Number,
    reviewIds: [{ type: Schema.Types.ObjectId, ref: 'Review'}],
    quantity: Number
    },
    {
      title: String,
    img: String,
    author: String,
    comicSeries: String,
    year: Number,
    condition: String,
    synopsis: String,
    price: Number,
    reviewIds: [{ type: Schema.Types.ObjectId, ref: 'Review'}],
    quantity: Number
    }
]


const createSeeds = async function () {
  try {
    const connect = await mongoose.connect(MONGO_URI)
    console.log(`Connected to database: ${connect.connections[0].name}`)

    // Clear DB,  Example: (-- const deleteAll = await Book.deleteMany() --)
    // console.log("Db clean")

    const dbClose = await mongoose.connection.close()
    console.log("Seeds created")
  } catch (err) {
    console.log(`Error creating the seeds: ${err}`)
  }
}

createSeeds()
