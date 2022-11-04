const { Schema, model } = require("mongoose");

const actSchema = new Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    // type: {
    //   type:  [String],
    // },
    // location: {
    //   type: Location,
    // },
    // dates: {
    //   type: Date,
    // }
  },
  {
    timestamps: true,
  }
);

const Activity = model("Activity", actSchema);

module.exports = Activity;