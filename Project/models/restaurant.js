const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true      
    },
    // duda en style si poner solo los estilos que queremos (ENUM)
    style: {
      type: String,
      required: true,
    },

    address: {
     type: String,
     unique: true
    },
   
    price: {
      type: Number,
      required: true 
    },
    phonenumber: {
      type: Number,
      unique: true
    },

    picture: {
      type: String,
    },
    instagram: {
      type: String,
      unique: true
    },
    // como poder hacer si o no (poner el si y el no en HBS)
    wifi: {
      type: Boolean,
    },
   
    coworking: {
      type: Boolean,
    },
  
    delivery: {
      type: Boolean,
    }

  },



  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Restaurant = model("Restaurant", userSchema);

module.exports = User;