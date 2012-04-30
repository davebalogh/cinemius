var model = require("../model/objects.js");
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
        Movie.find({ "id_imdb_api": id_imdb_api }, function (object) {
            if(object === null){
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
                        console.log("Saved! ID=" + movieCopy.id); 
                    } else {
                        console.log("Something went wrong...");
                        console.dir(err);
                    }
                });
            }
        });
    });
}
function createBackdrop(id_imdb_api, id_imgobject, type, size, height, width, url_remote_server){
    
    orm.connect("mysql", client, function (success, db) {
        if (!success) {
            console.log("Could not connect to database!");
            return;
        }
        client.query('USE cinemius');
        var Backdrop = model.Backdrop(db);
        Backdrop.find({ "id_imdb_api": id_imdb_api, "size": size }, function (object) {
            if(object === null){
                var newObject = new Backdrop({
                    "id_imdb_api"       : id_imdb_api,
                    "id_imgobject"      : id_imgobject,
                    "type"              : type,
                    "size"              : size,
                    "height"            : height,
                    "width"             : width,
                    "url_remote_server" : url_remote_server
                });
                newObject.save(function (err, objectCopy) {
                    if (!err) {
                        console.log("Saved! ID=" + objectCopy.id); 
                    } else {
                        console.log("Something went wrong...");
                        console.dir(err);
                    }
                });
            }
        });
    });
}

function createCast(id_cast, name, profile_remote_server){
    
    orm.connect("mysql", client, function (success, db) {
        if (!success) {
            console.log("Could not connect to database!");
            return;
        }
        client.query('USE cinemius');
        var Cast = model.Cast(db);
        Cast.find({ "id_cast": id_cast}, function (object) {
            if(object === null){
                var newObject = new Cast({
                    "id_cast"               : id_cast,
                    "name"                  : name,
                    "profile_remote_server" : profile_remote_server
                });
                newObject.save(function (err, objectCopy) {
                    if (!err) {
                        console.log("Saved! ID=" + objectCopy.id); 
                    } else {
                        console.log("Something went wrong...");
                        console.dir(err);
                    }
                });
            }
        });
    });
}


function createCastRelationship(id_imdb_api, id_cast, job, character){
    
    orm.connect("mysql", client, function (success, db) {
        if (!success) {
            console.log("Could not connect to database!");
            return;
        }
        client.query('USE cinemius');
        var movieCast = model.movieCast(db);
        movieCast.find({ "id_cast": id_cast, "id_imdb_api": id_imdb_api, "job": job}, function (object) {
            if(object === null){
                var newObject = new movieCast({
                    "id_imdb_api"   : id_imdb_api,
                    "id_cast"       : id_cast,
                    "job"           : job,
                    "character"     : character
                });
                newObject.save(function (err, objectCopy) {
                    if (!err) {
                        console.log("Saved! ID=" + objectCopy.id); 
                    } else {
                        console.log("Something went wrong...");
                        console.dir(err);
                    }
                });
            }
        });
    });
}



function createCountry(code, name){
    
    orm.connect("mysql", client, function (success, db) {
        if (!success) {
            console.log("Could not connect to database!");
            return;
        }
        client.query('USE cinemius');
        var Country = model.Country(db);
        Country.find({ "code": code}, function (object) {
            if(object === null){
                var newObject = new Country({
                    "code"  : code,
                    "name"  : name
                });
                newObject.save(function (err, objectCopy) {
                    if (!err) {
                        console.log("Saved! ID=" + objectCopy.id); 
                    } else {
                        console.log("Something went wrong...");
                        console.dir(err);
                    }
                });
            }
        });
    });
}

function createCountryRelationship(id_imdb_api, code){
    
    orm.connect("mysql", client, function (success, db) {
        if (!success) {
            console.log("Could not connect to database!");
            return;
        }
        client.query('USE cinemius');
        var movieCountry = model.movieCountry(db);
        movieCountry.find({ "code": code, "id_imdb_api": id_imdb_api}, function (object) {
            if(object === null){
                var newObject = new movieCountry({
                    "code"          : code,
                    "id_imdb_api"   : id_imdb_api
                });
                newObject.save(function (err, objectCopy) {
                    if (!err) {
                        console.log("Saved! ID=" + objectCopy.id); 
                    } else {
                        console.log("Something went wrong...");
                        console.dir(err);
                    }
                });
            }
        });
    });
}


function createGenre(id_genre, name){
    
    orm.connect("mysql", client, function (success, db) {
        if (!success) {
            console.log("Could not connect to database!");
            return;
        }
        client.query('USE cinemius');
        var Genre = model.Genre(db);
        Genre.find({ "id_genre": id_genre}, function (object) {
            if(object === null){
                var newObject = new Genre({
                    "id_genre"  : id_genre,
                    "name"  : name
                });
                newObject.save(function (err, objectCopy) {
                    if (!err) {
                        console.log("Saved! ID=" + objectCopy.id); 
                    } else {
                        console.log("Something went wrong...");
                        console.dir(err);
                    }
                });
            }
        });
    });
}



function createGenreRelationship(id_imdb_api, id_genre){
    
    orm.connect("mysql", client, function (success, db) {
        if (!success) {
            console.log("Could not connect to database!");
            return;
        }
        client.query('USE cinemius');
        var movieGenre = model.movieGenre(db);
        movieGenre.find({ "id_genre": id_genre, "id_imdb_api": id_imdb_api}, function (object) {
            if(object === null){
                var newObject = new movieGenre({
                    "id_genre"      : id_genre,
                    "id_imdb_api"   : id_imdb_api
                });
                newObject.save(function (err, objectCopy) {
                    if (!err) {
                        console.log("Saved! ID=" + objectCopy.id); 
                    } else {
                        console.log("Something went wrong...");
                        console.dir(err);
                    }
                });
            }
        });
    });
}


function createInternet(id_imdb_api, homepage, trailer, last_modified_at){
    
    orm.connect("mysql", client, function (success, db) {
        if (!success) {
            console.log("Could not connect to database!");
            return;
        }
        client.query('USE cinemius');
        var Internet = model.Internet(db);
        Internet.find({ "id_imdb_api": id_imdb_api}, function (object) {
            if(object === null){
                var newObject = new Internet({
                    "id_imdb_api"       : id_imdb_api,
                    "homepage"          : homepage,
                    "trailer"           : trailer,
                    "last_modified_at"  : last_modified_at
                });
                newObject.save(function (err, objectCopy) {
                    if (!err) {
                        console.log("Saved! ID=" + objectCopy.id); 
                    } else {
                        console.log("Something went wrong...");
                        console.dir(err);
                    }
                });
            }
        });
    });
}


function createLanguageSpoken(code, name, native_name){
    
    orm.connect("mysql", client, function (success, db) {
        if (!success) {
            console.log("Could not connect to database!");
            return;
        }
        client.query('USE cinemius');
        var languageSpoken = model.languageSpoken(db);
        languageSpoken.find({ "code": code}, function (object) {
            if(object === null){
                var newObject = new languageSpoken({
                    "code"          : code,
                    "name"          : name,
                    "native_name"   : native_name
                });
                newObject.save(function (err, objectCopy) {
                    if (!err) {
                        console.log("Saved! ID=" + objectCopy.id); 
                    } else {
                        console.log("Something went wrong...");
                        console.dir(err);
                    }
                });
            }
        });
    });
}



function  createMovieLanguageSpoken(id_imdb_api, code){
    
    orm.connect("mysql", client, function (success, db) {
        if (!success) {
            console.log("Could not connect to database!");
            return;
        }
        client.query('USE cinemius');
        var movieLanguageSpoken = model.movieLanguageSpoken(db);
        movieLanguageSpoken.find({ "code": code, "id_imdb_api": id_imdb_api}, function (object) {
            if(object === null){
                var newObject = new movieLanguageSpoken({
                    "code"          : code,
                    "id_imdb_api"   : id_imdb_api
                });
                newObject.save(function (err, objectCopy) {
                    if (!err) {
                        console.log("Saved! ID=" + objectCopy.id); 
                    } else {
                        console.log("Something went wrong...");
                        console.dir(err);
                    }
                });
            }
        });
    });
}


function  createMoney(id_imdb_api, budget, revenues, last_modified_at){
    
    orm.connect("mysql", client, function (success, db) {
        if (!success) {
            console.log("Could not connect to database!");
            return;
        }
        client.query('USE cinemius');
        var Money = model.Money(db);
        Money.find({"id_imdb_api": id_imdb_api}, function (object) {
            if(object === null){
                var newObject = new Money({
                    "id_imdb_api"       : id_imdb_api,
                    "budget"            : budget,
                    "revenues"          : revenues,
                    "last_modified_at"  : last_modified_at
                });
                newObject.save(function (err, objectCopy) {
                    if (!err) {
                        console.log("Saved! ID=" + objectCopy.id); 
                    } else {
                        console.log("Something went wrong...");
                        console.dir(err);
                    }
                });
            }
        });
    });
}


function  createPoster(id_imdb_api, type, size, height, width, url_remote_server){
    
    orm.connect("mysql", client, function (success, db) {
        if (!success) {
            console.log("Could not connect to database!");
            return;
        }
        client.query('USE cinemius');
        var Poster = model.Poster(db);
        Poster.find({"id_imdb_api": id_imdb_api}, function (object) {
            if(object === null){
                var newObject = new Poster({
                    "id_imdb_api"       : id_imdb_api,
                    "type"              : type,
                    "size"              : size,
                    "height"            : height,
                    "width"             : width,
                    "url_remote_server" : url_remote_server
                });
                newObject.save(function (err, objectCopy) {
                    if (!err) {
                        console.log("Saved! ID=" + objectCopy.id); 
                    } else {
                        console.log("Something went wrong...");
                        console.dir(err);
                    }
                });
            }
        });
    });
}
exports.createMovie = createMovie;
exports.createBackdrop = createBackdrop;
exports.createCast = createCast;
exports.createCastRelationship = createCastRelationship;
exports.createCountry = createCountry;
exports.createCountryRelationship = createCountryRelationship;
exports.createGenre = createGenre;
exports.createGenreRelationship = createGenreRelationship;

exports.createInternet = createInternet;
exports.createLanguageSpoken = createLanguageSpoken;
exports.createMovieLanguageSpoken = createMovieLanguageSpoken;
