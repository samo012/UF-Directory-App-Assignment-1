'use strict';

var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config'),
    listingsJSON = require('./listings');


mongoose.connect(config.db.uri);


var listings = require('./listings.json').entries;

for (var i = 0; i < listings.length; i++) {

    var item = Listing(listings[i]);

    item.save(function(err) {

        if (err) throw err;

        console.log("Listing created..");

    });

}

