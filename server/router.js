function route(handle, pathname, response, param) {
  console.log("request to: " + pathname);
  if (typeof handle[pathname] === 'function') {
     handle[pathname](response, param);
  } else {
    console.log("Error 404");
    response.writeHead(404, {"Content-Type": "text/html"});
    response.end();
  }
}

exports.route = route;