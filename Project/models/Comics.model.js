const { Schema, model } = require("mongoose");

const comicSchema = new Schema(
  {
    title: String,
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
