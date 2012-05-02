var httpRequest = require("./includes/httpRequest.js");
var info = require("./includes/settings.js");
var orm = require("./model/database.js");
var cache = require("./cache/nosql.js");

function movieTrailer(response, text) {
 
    movieGetInfo(response, text);

}

function movieSearch(response, text) {
    

    cache.findSearch(text,
        function(err, objects){
            if(objects.length>0){
                console.log('Document closed');
                response.writeHead(200, {"Content-Type": "application/json"});
                response.write(objects[0].result);
                response.end(); 
            }
            else{
                httpRequest.getResponse(info.settings.IMDB_URL, '/2.1/Movie.search/en/json/' + info.settings.IMDB_KEY + '/' + text, text, response, 
                    function(text, body){
                    cache.saveSearch(text, body);
                });
            }
        
    });

}

function movieGetInfo(response, text) {
    httpRequest.getResponse(info.settings.IMDB_URL, '/2.1/Movie.getInfo/en/json/' + info.settings.IMDB_KEY + '/' + text, text, response, 
        function(text, body){
            var receivedObject = JSON.parse(body);
            if(receivedObject.length > 0){
                console.log('requested: ' + receivedObject[0].name);

                //mergin each keyword 
                var keywords = '';
                var isfirst = true;
                for(var x = 0; x < receivedObject[0].keywords.length; x++){
                    if(isfirst){
                        isfirst = false;
                    }
                    else{
                        keywords += ',';
                    }
                    keywords += receivedObject[0].keywords[x];
                }

                //saving the movie
                orm.createMovie(
                    receivedObject[0].imdb_id, 
                    receivedObject[0].id, 
                    receivedObject[0].original_name, 
                    receivedObject[0].overview, 
                    keywords,
                    receivedObject[0].language,
                    receivedObject[0].certification,
                    receivedObject[0].released,
                    receivedObject[0].runtime,
                    receivedObject[0].status);
                    
                //saving internet information
                orm.createInternet(
                    receivedObject[0].id, 
                    receivedObject[0].homepage, 
                    receivedObject[0].trailer, 
                    receivedObject[0].last_modified_at);
                    
                //saving revenue information
                orm.createMoney(
                    receivedObject[0].id, 
                    receivedObject[0].budget, 
                    receivedObject[0].revenue, 
                    receivedObject[0].last_modified_at);
                    
                //saving rating information
                orm.createRating(
                    receivedObject[0].id, 
                    receivedObject[0].rating, 
                    receivedObject[0].votes, 
                    receivedObject[0].last_modified_at);
                    
                //saving each backdrop
                for(var x = 0; x < receivedObject[0].backdrops.length; x++){
                    orm.createBackdrop(
                        receivedObject[0].id, 
                        receivedObject[0].backdrops[x].image.id, 
                        receivedObject[0].backdrops[x].image.type, 
                        receivedObject[0].backdrops[x].image.size, 
                        receivedObject[0].backdrops[x].image.height, 
                        receivedObject[0].backdrops[x].image.width, 
                        receivedObject[0].backdrops[x].image.url);
                }
                
                //saving each cast
                for(var x = 0; x < receivedObject[0].cast.length; x++){
                        
                    orm.createCast(
                        receivedObject[0].cast[x].id, 
                        receivedObject[0].cast[x].name, 
                        receivedObject[0].cast[x].profile);
                        
                    orm.createCastRelationship(
                        receivedObject[0].id, 
                        receivedObject[0].cast[x].id, 
                        receivedObject[0].cast[x].job, 
                        receivedObject[0].cast[x].character);
                }
                
                
                //saving each country
                for(var x = 0; x < receivedObject[0].countries.length; x++){
                        
                    orm.createCountry(
                        receivedObject[0].countries[x].code, 
                        receivedObject[0].countries[x].name);
                        
                    orm.createCountryRelationship(
                        receivedObject[0].id, 
                        receivedObject[0].countries[x].code);
                }
                
                //saving each genre
                for(var x = 0; x < receivedObject[0].genres.length; x++){
                        
                    orm.createGenre(
                        receivedObject[0].genres[x].id, 
                        receivedObject[0].genres[x].name);
                        
                    orm.createGenreRelationship(
                        receivedObject[0].id, 
                        receivedObject[0].genres[x].id);
                }
                
                //saving each language
                for(var x = 0; x < receivedObject[0].languages_spoken.length; x++){
                        
                    orm.createLanguageSpoken(
                        receivedObject[0].languages_spoken[x].code, 
                        receivedObject[0].languages_spoken[x].name,
                        receivedObject[0].languages_spoken[x].native_name);
                        
                    orm.createMovieLanguageSpoken(
                        receivedObject[0].id, 
                        receivedObject[0].languages_spoken[x].code);
                }

                //saving each poster
                for(var x = 0; x < receivedObject[0].posters.length; x++){
                    orm.createPoster(
                        receivedObject[0].id, 
                        receivedObject[0].posters[x].image.type, 
                        receivedObject[0].posters[x].image.size, 
                        receivedObject[0].posters[x].image.height, 
                        receivedObject[0].posters[x].image.width, 
                        receivedObject[0].posters[x].image.url);
                }
                
                 //saving each studio
                for(var x = 0; x < receivedObject[0].studios.length; x++){
                       
                    orm.createStudio(
                        receivedObject[0].studios[x].id, 
                        receivedObject[0].studios[x].name);
                      
                    orm.createStudioRelationship(
                        receivedObject[0].studios[x].id,
                        receivedObject[0].id);
                }
            }

    });
}

function index(response, text){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write('Cinemius API 0.1');
    response.end();
}
exports.movieTrailer = movieTrailer;
exports.movieSearch = movieSearch;
exports.movieGetInfo = movieGetInfo;
exports.index = index;