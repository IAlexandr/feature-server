var express = require('express');
var iisBaseUrl = require('iis-baseurl');
var options = require('./options');

var app = express();

app.set('json spaces', 2);

app.use(iisBaseUrl());

app.get('/', function (req, res) {
  return res.send('Feature-server v0.0.1');
});

app.use('/services/tractors', require('./lib/router'));

var port = options.port;

app.listen(port);

console.log('Server listening on port', port);
