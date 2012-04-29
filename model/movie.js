// define a Movie
function Movie(db){
    var movie = db.define("movie", {
		"id_movie"		: { "type": "int" },
		"id_imdb"       : { "type": "string" },
        "id_imdb_api"   : { "type": "int" },
        "name"          : { "type": "string" },
        "overview"      : { "type": "text" },
        "keywords"      : { "type": "string" },
        "laguage"       : { "type": "string" },
        "certification" : { "type": "string" },
        "released"      : { "type": "string" },
        "runtime"       : { "type": "int" },
        "registered"    : { "type": "string" },
        "status"        : { "type": "string" }
	});
    movie.sync();
    return movie;
}

exports.Movie = Movie;