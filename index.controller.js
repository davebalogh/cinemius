var httpRequest = require("./includes/httpRequest.js");
var info = require("./includes/settings.js");

function movieSearch(response, text) {
    httpRequest.getResponse(info.settings.IMDB_URL, '/2.1/Movie.search/en/json/' + info.settings.IMDB_KEY + '/' + text, response);
}

function movieGetInfo(response, text) {
    httpRequest.getResponse(info.settings.IMDB_URL, '/2.1/Movie.getInfo/en/json/' + info.settings.IMDB_KEY + '/' + text, response);
}

function index(response, text){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write('Cinemius API 0.1');
    response.end();
}
exports.movieSearch = movieSearch;
exports.movieGetInfo = movieGetInfo;
exports.index = index;