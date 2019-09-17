'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config'),
    listingFile = require('./listings.json');
    mongoose.connect(config.db.uri, { useNewUrlParser: true });

    /* 
      Instantiate a mongoose model for each listing object in the JSON file, 
      and then save it to your Mongo database 
      //see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    
      Remember that we needed to read in a file like we did in Bootcamp Assignment #1.
     */
    for (var i=0; i < listingFile.entries.length; i++)
    {
      var newEntry = Listing({
        code : listingFile.entries[i].code,
        name : listingFile.entries[i].name,
        coordinates : listingFile.entries[i].coordinates,
        address : listingFile.entries[i].address,
      })
    
      newEntry.save(function(err)
      {
        if (err) throw err;
      });
    }