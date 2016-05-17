var mongoose = require('mongoose'),
        Schema = mongoose.Schema;

    var DetailsSchema = new Schema({
    location: {
        Opening: { type: String, required: true }, 
        Parking:  {type: String, required: true }, 
        type:  {type: String, required: true },
        Link:  {type: String, required: false }
    }, 
    directions: {
        How:  {type: String, required: true },
    }, 
    description:  {type: String, required: true },
    
    nearby: {
        playground:  {type: String, required: true },
        shop:  {type: String, required: true }, 
        petrol:  {type: String, required: true },
        garda:  {type: String, required: true }, 
        church:  {type: String, required: true }
    }, 
    images: { type: String, required: true }, 
    name: { type: String, required: true }, 
    facilities: {
        private: { type: String, required: true },
        babychanging: { type: String, required: true },
        eating: { type: String, required: true },
        highchair: { type: String, required: true }
    }
})

    var FacilitySchema = new Schema({ 
      _id: { type: String, required: true }, 
      name: { type: String, required: true },
      imageUrl: { type: String, required: true },
      phoneno: { type: String, required: true },
      county: { type: String, required: true },
      town: { type: String, required: true },
      Details: [DetailsSchema],
      upvotes: Number
    });

    module.exports = mongoose.model('Facility', FacilitySchema);