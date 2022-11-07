const { Schema, model } = require("mongoose");
const commentSchema = new Schema(
    {
    description: {
        type: String,
        required: true,
        trim: true,
    },
    author:{ type: Schema.Types.ObjectId, ref: 'User' },
    commentLike: [{ type: Schema.Types.ObjectId, ref: 'CommentLike' }]
    },
    {
      timestamps: true,
    }
);
  
  const Comment = model("Comment", commentSchema);
  
  module.exports = Comment;
  