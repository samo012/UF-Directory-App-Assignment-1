
var mongoose = require('mongoose'),
Listing = require('./ListingSchema.js'),
config = require('./config.js');
mongoose.connect(config.db.uri);



var findLibraryWest = function() {


     Listing.findOne({ name: "Library West" }, function(err, listing) {

      if (err) throw err;
        console.log(JSON.stringify(listing));

      });
   };

   var removeCable = function() {

    var myquery = { code: 'CABL' };

    Listing.deleteOne(myquery,function(err, data){
      if(err) throw err;
      console.log("Listing successfully deleted..");
    });

  };


  var updatePhelpsLab = function() {

  var myquery = { name: "Phelps Laboratory" };
  var newvalues = { $set: {address: "1953 Museum Rd, Gainesville, FL 32603"} };
  Listing.updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("Listing updated");
  });
  };

  var retrieveAllListings = function() {

    Listing.find({}, function(err, listings) {

     if (err) throw err;

     for (var i = 0; i < listings.length; i++) {
      console.log(JSON.stringify(listings[i]));
    }
  });
  };



  findLibraryWest();

  removeCable();

  updatePhelpsLab();

  retrieveAllListings();