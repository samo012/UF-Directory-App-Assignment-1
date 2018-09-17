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
    listingsJSON = require('./listings');

/* Connect to your database */
    //mongoose.connect(config.db.uri);

var uri = 'config.db.uri'; 
mongoose.connect(uri, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
});

fs.readFile('listings.json', 'utf8', function(err, data){
  if(err){
    console.log("ERROR: Configuration load - " + err);
    throw err;
  }

  var listings = JSON.parse(data);
  console.log("Configuration loaded successfully");

  listings.entries.forEach(function(listing){
      var model = new Listing(listing);
      model.save(function(err){
        if(err)
          throw err;
      });
    });

});

process.exit();


/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */