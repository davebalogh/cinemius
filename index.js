var server = require("./server/service.js");
var router = require("./server/router.js");
var controller = require("./index.controller.js");

var handle = {};
handle["/"] = controller.index;
handle["/Movie.search"] = controller.movieSearch;
handle["/Movie.getInfo"] = controller.movieGetInfo;
handle["/Movie.trailer"] = controller.movieTrailer;

server.init(router.route, handle);

