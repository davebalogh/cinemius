var server = require("./server/service.js");
var router = require("./server/router.js");
var controller = require("./index.controller.js");
var orm = require("./model/database.js");

var handle = {};
handle["/"] = controller.index;
handle["/Movie.search"] = controller.movieSearch;
handle["/Movie.getInfo"] = controller.movieGetInfo;

server.init(router.route, handle);

