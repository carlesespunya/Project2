const { Schema, model } = require("mongoose");
const commentLikeSchema = new Schema(
    {
        comment: { type: Schema.Types.ObjectId, ref: 'Comment' },
        user: { type: Schema.Types.ObjectId, ref: 'User' },
    },
    {
      timestamps: true,
    }
);
  
  const CommentLike = model("CommentLike", commentLikeSchema);
  
  module.exports = CommentLike;
  