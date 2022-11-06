const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const rateSchema = new Schema(
  {
    user: {
        type: {type: Schema.Types.ObjectId, ref:"User"},

      },
   
    rate: {
      type: Boolean,
    },

    review: {
        type: String,
      },
  
  },

  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Rate = model("Rate", rateSchema);

module.exports = Rate;