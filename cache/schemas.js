var info = require("../includes/settings.js");

var mongoose = require('mongoose'),
    db = mongoose.connect(info.settings.MONGODB_MONGOLAB),
    Schema = mongoose.Schema,
 
Search = new Schema({
    text    : String,
    result  : String,
    date    : Date
});

var SearchModel = mongoose.model('Search', Search);

Trailer = new Schema({
    text    : String,
    result  : String,
    date    : Date
});

var TrailerModel = mongoose.model('Trailer', Trailer);

exports.Search = SearchModel;
exports.Trailer = TrailerModel;

    
    