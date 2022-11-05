//THIS DOCUMENTS NEEDS TO BE CHECKED, PROBABLY WILL GIVE ERRORS- TEST
const { Schema, model } = require("mongoose");

const shoppingCartSchema = new Schema(
  {
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    productIds: [{type: Schema.Types.ObjectId, ref: 'Comic'}],
    productQuantity: Number,
    totalPrice: Number
  }
);

const shoppingCart = model("shoppingCart", shoppingCartSchema);

module.exports = shoppingCart;
