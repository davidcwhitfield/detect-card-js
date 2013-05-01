// Generated by CoffeeScript 1.6.1
(function() {
  var fs, get_file_type, http, path, url;

  http = require('http');

  url = require('url');

  path = require('path');

  fs = require('fs');

  http.createServer(function(request, response) {
    var filename, uri;
    uri = url.parse(request.url).pathname;
    filename = uri === '/' ? 'index.html' : path.join(process.cwd(), uri);
    response.writeHead(200, {
      "Content-Type": "text/" + (get_file_type(filename))
    });
    return fs.readFile(filename, function(error, contents) {
      return response.end(contents);
    });
  }).listen(1337, "127.0.0.1");

  console.log('Server running at http://127.0.0.1:1337/');

  get_file_type = function(file) {
    if (file.match(/\.html$/)) {
      return "html";
    }
    if (file.match(/\.js$/)) {
      return "javascript";
    }
  };

}).call(this);
