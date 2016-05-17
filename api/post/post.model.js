var mongoose = require('mongoose'),
        Schema = mongoose.Schema;

    var CommentSchema = new Schema({
        body: { type: String, required: true },
        author: { type: String, required: true },
        upvotes: Number
      });

    var PostSchema = new Schema({
      type: { type: String, optional: true },
      title: { type: String, required: true },
      location: { type: String, optional: true },
      town: { type: String, optional: true },
      county: { type: String, optional: true },
      feedback: { type: String, optional: true },
      username: { type: String, required: true },
      comments: [CommentSchema],
      upvotes: Number
    });

    module.exports = mongoose.model('posts', PostSchema);
 