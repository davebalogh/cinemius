var http = require("http");
var url = require("url");
var info = require("../includes/settings.js");

function init(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    var method = '/';
    var text = '';
    if(pathname.split('/').length == 3){
        text = pathname.split('/')[2];
        method = '/' + pathname.split('/')[1];
    }
    route(handle, method, response, text);
  }

  http.createServer(onRequest).listen(info.settings.SERVER_PORT, info.settings.SERVER_HOST);
  console.log("Server started.");
}

exports.init = init;