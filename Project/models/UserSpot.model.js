const { Schema, model } = require("mongoose");
const UserSpotSchema = new Schema(
    {
        spot: { type: Schema.Types.ObjectId, ref: 'Spot' },
        user: { type: Schema.Types.ObjectId, ref: 'User' },
    },
    {
      timestamps: true,
    }
);
  
  const UserSpot = model("UserSpot", UserSpotSchema);
  
  module.exports = UserSpot;
