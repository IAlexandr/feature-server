var express = require('express');
var iisBaseUrl = require('iis-baseurl');
var options = require('./options');

var apiRoutes = require('./lib/routes');

var app = express();

app.use(iisBaseUrl());

app.get('/hello', function (req, res) {
  return res.send('world');
});

apiRoutes.forEach(function (route) {
  app.use(route.mountPoint, route.router);
});

var port = options.port;

app.listen(port);

console.log('Server listening on port', port);