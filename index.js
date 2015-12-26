var express = require('express');
var iisBaseUrl = require('iis-baseurl');
var bodyParser = require('body-parser');

var options = require('./options');

var app = express();

app.set('json spaces', 2);

app.use(iisBaseUrl());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(function (req, res, next) {
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': 0,
  });
  next();
});

app.get('/', function (req, res) {
  return res.send('Feature-server v' + options.version);
});

app.use('/services/tractors', require('./lib/router'));

var port = options.port;

app.listen(port);

console.log('Server listening on port', port);
