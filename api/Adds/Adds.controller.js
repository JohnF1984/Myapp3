var _ = require('lodash')
    var Adds = require('./Adds.model');  

    function handleError(res, err) {
      return res.send(500, err);
    }

    exports.index = function(req, res) {
        Adds.find(function (err, posts) {
            if(err) { return handleError(res, err); }
            return res.json(200, posts);
        });
    } ;
    exports.create = function(req, res) {
      req.body.comments = []
      req.body.upvotes = 0 
      Adds.create(req.body, function(err, post) {
          if (err) { return handleError(res, err); }
          return res.json(201, post);
       });
    };
     exports.show = function(req, res) {
      Adds.findById(req.params.id, function (err, post) {
          if(err) { return handleError(res, err); }
          return res.json(200, post);
      });
  } ;
  // Update an existing posts upvotes.
  exports.update_upvotes = function(req, res) {
     Adds.findById(req.params.id, function (err, post) {
          post.upvotes = req.body.upvotes
          post.save(function (err) {
              if(err) { return handleError(res, err); }
              return res.json(200, post);
          });
      });
  };
  // Add a comment to a post
  exports.add_comment = function(req, res) {
     Adds.findById(req.params.id, function (err, post) {
            var comment = {
                body: req.body.body,
                author: req.body.author ,
                upvotes: 0
             }
            post.comments.push(comment)
            post.save(function (err) {
              if(err) { return handleError(res, err); }
              var last = _.last(post.comments)
              if (last != undefined) {
                 return res.json(200, last);
              } else {
                return res.send(500,"Database error")
                 }
            });
      });
  };

   // Deletes a customer from datastore.
    exports.destroy = function(req, res) {
        Adds.findById(req.params.id, function (err, post) {
            post.remove(function (err) {
                if(err) { return handleError(res, err); }
                return res.send(200,'Deleted');
            });
        })
    }

