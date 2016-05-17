var mongoose = require('mongoose');
    mongoose.connect('mongodb://john:test@ds019468.mlab.com:19468/babyapp');

    var Post = require('./api/Facility/Facility.model');

    Post.find({}).remove(function() {
      Post.create(   {
        age: 1, 
        upvotes: 10, 
        imageUrl: 'img/cahir.png', 
        name: 'Cahir House Hotel',
        phoneno: '052 7426225', 
        county: 'Tipperary',
        town: 'Cahir'
    }, 
    {
        age: 2, 
        upvotes: 3, 
        imageUrl: 'img/city square.png', 
        name: 'City Square Shopping Centre',
        phoneno: '051 2345566', 
        county: 'Waterford',
        town: 'Waterford City'
    }, 
    {
        age: 3, 
        upvotes: 1, 
        imageUrl: 'img/New Ross.jpg', 
        name: 'New Ross Tourist Office',
        phoneno: '054 1234321', 
        county: 'Wexford',
        town: 'New Ross'
    }, 
    {
        age: 4, 
        upvotes: 2, 
        imageUrl: 'img/mcdonagh.png', 
        name: 'McDonagh Junction Shopping Centre',
        phoneno: '059 34567', 
        county: 'Kilkenny',
        town: 'Kilkenny City'
    }, 
    {
        age: 5, 
        upvotes: 7,
        imageUrl: "img/MSC.bmp", 
        name: "Mahon Point Shopping Centre",
        phoneno: "021 2223334", 
        county: "Cork",
        town: "Mahon"
    }, 
    {
        age: 6, 
        upvotes: 6,
        imageUrl: 'img/Merchants.jpg', 
        name: 'Merchants Quay Shopping Centre',
        phoneno: '021 3332231', 
        county: 'Cork',
        town: 'Cork City'
    }, 
    {
        age: 7, 
        upvotes: 23,
        imageUrl: 'img/clonmel.bmp', 
        name: 'Showgrounds Shopping Centre',
        phoneno: '052 74265326', 
        county: 'Tipperary',
        town: 'Clonmel'
    }, 
    {
        age: 8, 
        upvotes: 5,
        imageUrl: 'img/jervis.png', 
        name: 'Jervis Shopping Centre',
        phoneno: '01 32413552', 
        county: 'Dublin',
        town: 'Dublin 1'
    }, 
    {
        age: 9, 
        upvotes: 20,
        imageUrl: 'img/dungarvan.jpg', 
        name: 'Dungarvan Shopping Centre',
        phoneno: '051 12345', 
        county: 'Waterford',
        town: 'Dungarvan'
    },   function() {
          process.exit()
        });
    });