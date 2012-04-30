var schemas = require("../cache/schemas.js");

function saveSearch(text, result){
    var newSearch = new schemas.Search({
      text      : text,
      result    : result
    });
    newSearch.save(function(err){
        if (err) { console.log(err); }
        else { console.log('document saved in mongodb.');}
    });
}

function findSearch(text, callback){
    schemas.Search.find({ text: text}, function(err, objects) {
         if(callback !== null && typeof(callback) === 'function'){
                callback(err, objects);
        }
    });
}

exports.saveSearch = saveSearch;
exports.findSearch = findSearch;