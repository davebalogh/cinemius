var http = require("http");
function getResponse(url, path, response){
    var options = {
      host: url,
      port: 80,
      path: path
    };
    var body = '';
    var req = http.request(options);
    req.end();
    req.on('response', function (res) {
        res.on('data', function (chunk) {
            body += chunk;
          });
        res.on('end', function () {
            console.log('Connection closed');
            response.writeHead(200, {"Content-Type": "application/json"});
            response.write(body);
            response.end();  
        });
    });

}

exports.getResponse = getResponse;