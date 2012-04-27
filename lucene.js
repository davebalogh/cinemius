var solr = require('natural');

function lucene(){
   var natural = require('natural'),
    phonetic = natural.Metaphone;
    
    var wordA = 'phonetics';
    var wordB = 'fonetix';
    
    if(phonetic.compare(wordA, wordB))
        console.log('they sound alike!');
    return "lucene";
}
exports.lucene = lucene;