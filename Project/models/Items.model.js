const { Schema, model } = require("mongoose");

const itemSchema = new Schema(
  {
    comicId: {
        type: Schema.Types.ObjectId, 
        ref: 'Comic'
    }
  }
);

const Item = model("Item", itemSchema);


module.exports = Item;
