var _ = require('lodash')
    var Detail = require('./Details.model');  

    function handleError(res, err) {
      return res.send(500, err);
    }

    exports.index = function(req, res) {
        Detail.find(function (err, posts) {
            if(err) { return handleError(res, err); }
            return res.json(200, posts);
        });
    } ;
    exports.create = function(req, res) {
      req.body.comments = []
      req.body.upvotes = 0 
      Detail.create(req.body, function(err, post) {
          if (err) { return handleError(res, err); }
          return res.json(201, post);
       });
    };
     exports.show = function(req, res) {
      Detail.findById(req.params.id, function (err, post) {
          if(err) { return handleError(res, err); }
          return res.json(200, post);
      });
  } ;
  // Update an existing posts upvotes.
  exports.update_upvotes = function(req, res) {
     Detail.findById(req.params.id, function (err, post) {
          post._id = req.body.upvotes
          post.name(function (err) {
              if(err) { return handleError(res, err); }
              return res.json(200, post);
          });
      });
  };

  // Update an existing contact in datastore.
    exports.update = function(req, res) {
       Detail.findById(req.params.id, function (err, post) {
            post.name = req.body.name
            post.description = req.body.description
            post.directionsHow = req.body.directionsHow
            post.locationOpening = req.body.locationOpening
            post.locationParking = req.body.locationParking
            post.locationtype = req.body.locationtype
            post.locationlink = req.body.locationlink
            post.nearbyplayground = req.body.nearbyplayground
            post.nearbyshop = req.body.nearbyshop
            post.nearbypetrol = req.body.nearbypetrol
            post.nnearbygarda = req.body.nearbygarda
            post.nnearbychurch = req.body.nearbychurch
            post.facilitiesprivate = req.body.facilitiesprivate
            post.facilitiesbabychanging = req.body.facilitiesbabychanging
            post.facilitieseating = req.body.facilitieseating
            post.facilitieshighchair = req.body.facilitieshighchair
            post.images = req.body.images
            post.images1 = req.body.images1
            post.save(function (err) {
                if(err) { return handleError(res, err); }
                return res.send(200, 'Update successful');
            });
        });
     }
  
  //Deletes a customer from datastore.
    exports.destroy = function(req, res) {
        Detail.findById(req.params.id, function (err, post) {
            post.remove(function (err) {
                if(err) { return handleError(res, err); }
                return res.send(200,'Deleted');
            });
        })
    }
