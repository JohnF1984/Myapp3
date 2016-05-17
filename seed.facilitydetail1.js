var mongoose = require('mongoose');
    mongoose.connect('mongodb://john:test@ds019468.mlab.com:19468/babyapp');

    var Facility = require('./api/Details/Details.model');

    Facility.find({}).remove(function() {
      Facility.create( {
    _id: 'Clonmel',
    locationOpening: '10am to 6pm', 
    locationParking: 'Yes', 
    locationtype: 'Shopping centre',
    locationlink: 'http//:www.google.ie',
    directionsHow: 'Follow all signs for Waterford approaching Clonmel, eventually finding your way out the Davis Road. The Showgrounds shopping centre will be on your right just past Larry O Keefe Furniture',
    description: 'Located on the outskirts of Clonmel, with ample parking provided, The Showgrounds has excellent baby changing facilities and private breastfeeding facilities', 
    nearbyplayground: 'Yes - Play area', 
    nearbyshop: 'Yes', 
    nearbypetrol: 'Yes - within 1km', 
    nearbygarda: 'No', 
    nearbychurch: 'No',
    images: ['img/clonmel.bmp'],
    images1: ['img/showgrounds.png'],
    name: 'Showgrounds Shopping Centre', 
    facilitiesprivate: 'Yes', 
    facilitiesbabychanging: 'Yes - Excellent Independent facilities',
    facilitieseating: 'Yes - Restaurant',
    facilitieshighchair: 'Yes'
    },   function() {
          process.exit()
        });
    });