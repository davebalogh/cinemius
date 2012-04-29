var server = require("./server/service.js");
var router = require("./server/router.js");
var controller = require("./index.controller.js");
var orm = require("./model/database.js");

var handle = {};
handle["/"] = controller.index;
handle["/Movie.search"] = controller.movieSearch;
handle["/Movie.getInfo"] = controller.movieGetInfo;

server.init(router.route, handle);
orm.createMovie("tt1446714", 
                70981, 
                "Prometheus", 
                "Prometheus is an upcoming science fiction film directed by Ridley Scott", 
                "prequel,alien,gore,horror movie,sequel",
                "en",
                "",
                "2012-06-08",
                124,
                "In Production");
