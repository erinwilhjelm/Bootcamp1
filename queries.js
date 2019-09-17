/* Add all the required libraries*/

/* Connect to your database using mongoose - remember to keep your key secret*/

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config.js'),
    listingFile = require('./listings.json'); 
    
    mongoose.connect(config.db.uri, { useNewUrlParser: true });
var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listing.findOne({name:"Library West"}, function(err, listingData) {
    
    if (err) throw err;
    
    console.log("Found : ", listingData.name, "\n", listingData);
  });

};
var removeCable = function() {

  Listing.findOne({code : "CABL"}, function(err, listingData) {
    
      if (err) throw err;
    
      Listing.deleteOne(function(err) {
        if (err) throw err;
      })
      console.log("Removed : ", listingData.code, "\n", listingData);
  });
};
var updatePhelpsLab = function() {

  Listing.findOne({code:"PHL"}, function(err, listingData){
    if (err) throw err;
    listingData.address = "1953 Museum Rd, Gainesville, FL 32603";
    listingData.save(function(err) {
      if (err) throw err;
      console.log("Update : ", listingData.name, "\n", listingData);
    });
  });

};
var retrieveAllListings = function() {

  Listing.find(function(err, listingData) {
    
    if (err) throw err;
    
    console.log("\n All Listings \n", listingData);
  });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
