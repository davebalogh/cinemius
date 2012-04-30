// define a Movie
function Movie(db){
	var movie = db.define("movie", {
        "id_movie"      : { "type": "int" },
        "id_imdb"       : { "type": "string" },
        "id_imdb_api"   : { "type": "int" },
        "name"          : { "type": "string" },
        "overview"      : { "type": "text" },
        "keywords"      : { "type": "text" },
        "laguage"       : { "type": "string" },
        "certification" : { "type": "string" },
        "released"      : { "type": "string" },
        "runtime"       : { "type": "int" },
        "registered"    : { "type": "string" },
        "status"        : { "type": "string" }
	});
    return movie;
}


// define a Backdrop
function Backdrop(db){
    var backdrop = db.define("movie_backdrop", {
        "id_movie_backdrop" : { "type": "int" },
        "id_imdb_api"       : { "type": "int" },
        "type"              : { "type": "string" },
        "size"              : { "type": "string" },
        "height"            : { "type": "int" },
        "width"             : { "type": "int" },
        "url_remote_server" : { "type": "string" },
        "url_local_server"  : { "type": "string" }
	});
    return backdrop;
}


// define a movieCast
function movieCast(db){
    var movieCast = db.define("movie_cast", {
        "id_movie_cast" : { "type": "int" },
        "id_imdb_api"   : { "type": "int" },
        "id_cast"       : { "type": "int" },
        "job"           : { "type": "string" },
        "character"     : { "type": "string" }
    });
    return movieCast;
}


// define a Cast
function Cast(db){
    var Cast = db.define("cast", {
        "id_cast"               : { "type": "int" },
        "name"                  : { "type": "string" },
        "profile_remote_server" : { "type": "string" },
        "profile_local_server"  : { "type": "string" }
    });
    return Cast;
}


// define a Country
function Country(db){
    var Country = db.define("country", {
        "id_country"    : { "type": "int" },
        "code"          : { "type": "string" },
        "name"          : { "type": "string" }
    });
    return Country;
}

// define a movieCountry
function movieCountry(db){
    var movieCountry = db.define("movie_country", {
        "id_movie_country"  : { "type": "int" },
        "id_imdb_api"       : { "type": "string" },
        "code"              : { "type": "string" }
    });
    return movieCountry;
}

// define a Genre
function Genre(db){
    var Genre = db.define("genre", {
        "id_genre"  : { "type": "int" },
        "name"      : { "type": "string" }
    });
    return Genre;
}

// define a movieGenre
function movieGenre(db){
    var movieGenre = db.define("movie_genre", {
        "id_movie_genre"    : { "type": "int" },
        "id_imdb_api"       : { "type": "int" },
        "id_genre"          : { "type": "int" }
    });
    return movieGenre;
}

// define a Internet
function Internet(db){
    var Internet = db.define("movie_internet", {
        "id_movie_internet" : { "type": "int" },
        "id_imdb_api"       : { "type": "int" },
        "homepage"          : { "type": "string" },
        "trailer"           : { "type": "string" },
        "last_modified_at"  : { "type": "string" }
    });
    return Internet;
}


// define a languageSpoken
function languageSpoken(db){
    var languageSpoken = db.define("language_spoken", {
        "id_language_spoken"    : { "type": "int" },
        "code"                  : { "type": "string" },
        "name"                  : { "type": "string" },
        "native_name"           : { "type": "string" }
    });
    return languageSpoken;
}


// define a movieLanguageSpoken
function movieLanguageSpoken(db){
    var languageSpoken = db.define("movie_language_spoken", {
        "id_movie_language_spoken"  : { "type": "int" },
        "id_imdb_api"               : { "type": "int" },
        "code"                      : { "type": "string" }
    });
    return languageSpoken;
}


// define a Money
function Money(db){
    var Money = db.define("movie_money", {
        "id_movie_money"    : { "type": "int" },
        "id_imdb_api"       : { "type": "int" },
        "budget"            : { "type": "int" },
        "revenues"          : { "type": "int" },
        "last_modified_at"  : { "type": "string" }
    });
    return Money;
}

// define a Poster
function Poster(db){
    var Poster = db.define("movie_poster", {
        "id_movie_poster"   : { "type": "int" },
        "id_imdb_api"       : { "type": "int" },
        "type"              : { "type": "string" },
        "size"              : { "type": "string" },
        "height"            : { "type": "int" },
        "width"             : { "type": "int" },
        "url_remote_server" : { "type": "string" },
        "url_local_server"  : { "type": "string" },
    });
    return Poster;
}

function Rating(db){
    var Rating = db.define("movie_rating", {
        "id_movie_rating"   : { "type": "int" },
        "id_imdb_api"       : { "type": "int" },
        "rating"            : { "type": "float" },
        "votes"             : { "type": "int" },
        "last_modified_at"  : { "type": "string" }
    });
    return Rating;
}

function Studio(db){
    var Studio = db.define("studio", {
        "id_studio"     : { "type": "int" },
        "name"          : { "type": "string" }
    });
    return Studio;
}

function movieStudio(db){
    var movieStudio = db.define("movie_studio", {
        "id_movie_studio"   : { "type": "int" },
        "id_imdb_api"       : { "type": "int" },
        "id_studio"         : { "type": "int" }
    });
    return movieStudio;
}



exports.Movie = Movie;
exports.Backdrop = Backdrop;
exports.movieCast = movieCast;
exports.Cast = Cast;
exports.Country = Country;
exports.movieCountry = movieCountry;
exports.Genre = Genre;
exports.movieGenre = movieGenre;
exports.Internet = Internet;
exports.languageSpoken = languageSpoken;
exports.movieLanguageSpoken = movieLanguageSpoken;

exports.Money = Money;
exports.Poster = Poster;
exports.Rating = Rating;

exports.Studio = Studio;
exports.movieStudio = movieStudio;