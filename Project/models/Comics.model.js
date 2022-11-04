const { Schema, model } = require("mongoose");

const comicSchema = new Schema(
  {
    title: String,
    name: String,
    timestamps: true,
  }
);

const User = model("User", comicSchema);

module.exports = User;
