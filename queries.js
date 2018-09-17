
var mongoose = require('mongoose'),
  Listing = require('./ListingSchema.js'),
  config = require('./config.js');

var findLibraryWest = function() {

   Listing.findOne({name: 'Library West'}, function(err, data){
     if (err) throw err;
     console.log(data);
   });
};

var removeCable = function() {
  
  Listing.find({code : 'CABL'}, function(err, data){
     if(err) throw err;

      data.remove(function(err){
        if(err) throw err;
        console.log(data);
      });
  });
};

var updatePhelpsLab = function() {

   Listing.findOne({name: Phelps Laboratory}, function(err, data){
       if(err) throw err;
       data.address = '1953 Museum Road Gainesville, FL 32611';

       data.save(function(err){
         if (err) throw err;
         console.log(data);
       })
    });
};

var retrieveAllListings = function() {

   Listings.Find{}, function(err, data){
     if(err) throw err;
    console.log(data);
   }
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
