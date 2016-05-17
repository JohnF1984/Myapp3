var mongoose = require('mongoose'),
        Schema = mongoose.Schema;

  
var DetailsSchema = new Schema({
    _id: { type: String, required: true },
    locationOpening: { type: String, required: true }, 
    locationParking:  {type: String, required: true }, 
    locationtype:  {type: String, required: true },
    locationlink:  {type: String, required: true },
    directionsHow: {type: String, required: true },
    description:  {type: String, required: true },
    nearbyplayground:  {type: String, required: true },
    nearbyshop:  {type: String, required: true }, 
    nearbypetrol:  {type: String, required: true },
    nearbygarda:  {type: String, required: true }, 
    nearbychurch:  {type: String, required: true },
    images: { type: String, required: true }, 
    images1: { type: String, required: true }, 
    name: { type: String, required: true }, 
    facilitiesprivate: { type: String, required: true },
    facilitiesbabychanging: { type: String, required: true },
    facilitieseating: { type: String, required: true },
    facilitieshighchair: { type: String, required: true }
    })


    module.exports = mongoose.model('Details', DetailsSchema);