var info = require("../includes/settings.js");

var mongoose = require('mongoose'),
    db = mongoose.connect(info.settings.MONGODB_MONGOLAB),
    Schema = mongoose.Schema,
 
Search = new Schema({
    text    : String,
    result  : String
});

var SearchModel = mongoose.model('Search', Search);

exports.Search = SearchModel;


    
    