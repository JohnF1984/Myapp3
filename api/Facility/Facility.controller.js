var _ = require('lodash')
    var Facility = require('./Facility.model');  

    function handleError(res, err) {
      return res.send(500, err);
    }

    exports.index = function(req, res) {
        Facility.find(function (err, posts) {
            if(err) { return handleError(res, err); }
            return res.json(200, posts);
        });
    } ;
    exports.create = function(req, res) {
      req.body.upvotes = 0 
      Facility.create(req.body, function(err, post) {
          if (err) { return handleError(res, err); }
          return res.json(201, post);
       });
    };
     exports.show = function(req, res) {
      Facility.findById(req.params.id, function (err, post) {
          if(err) { return handleError(res, err); }
          return res.json(200, post);
      });
  } ;
  // Update an existing posts upvotes.
  exports.update_upvotes = function(req, res) {
     Facility.findById(req.params.id, function (err, post) {
          post.upvotes = req.body.upvotes
          post.save(function (err) {
              if(err) { return handleError(res, err); }
              return res.json(200, post);
          });
      });
  };

  exports.add_detail = function(req, res) {
     Facility.findById(req.params.id, function (err, post) {
            var detail = {
                body: req.body.body,
                author: req.body.author ,
                upvotes: 0
             }
            post.details.push(comment)
            post.save(function (err) {
              if(err) { return handleError(res, err); }
              var last = _.last(post.details)
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
        Facility.findById(req.params.id, function (err, post) {
            post.remove(function (err) {
                if(err) { return handleError(res, err); }
                return res.send(200,'Deleted');
            });
        })
    }
  
