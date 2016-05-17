var mongoose = require('mongoose'),
        Schema = mongoose.Schema;

    var CommentSchema = new Schema({
        body: { type: String, required: true },
        author: { type: String, required: true },
        upvotes: Number
      });

    var AddsSchema = new Schema({
      location: { type: String, optional: true },
      town: { type: String, optional: true },
      county: { type: String, optional: true },
      username: { type: String, required: true },
      upvotes: Number
    });

    module.exports = mongoose.model('Adds', AddsSchema);