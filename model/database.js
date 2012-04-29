var model = require("../model/movie.js");
var orm = require('orm');
var mysql = require("mysql");
var info = require("../includes/settings.js");

var client = mysql.createClient({
  user: info.settings.DATABASE_USER,
  password: info.settings.DATABASE_PASSWORD,
  host: info.settings.DATABASE_HOST,
  port: info.settings.DATABASE_PORT
});

function createMovie(id_imdb, id_imdb_api, name, overview, keywords, laguage, certification, released, runtime, status){
    orm.connect("mysql", client, function (success, db) {
        if (!success) {
            console.log("Could not connect to database!");
            return;
        }
        client.query('USE cinemius');
        var Movie = model.Movie(db);
        var newMovie = new Movie({
    		"id_imdb"       : id_imdb,
            "id_imdb_api"   : id_imdb_api,
            "name"          : name,
            "overview"      : overview,
            "keywords"      : keywords,
            "laguage"       : laguage,
            "certification" : certification,
            "released"      : released,
            "runtime"       : runtime,
            "status"        : status
        });
        newMovie.save(function (err, movieCopy) {
            if (!err) {
                console.log("Saved! ID=" + newMovie.id); 
            } else {
                console.log("Something went wrong...");
                console.dir(err);
            }
        });
    });
}

exports.createMovie = createMovie;