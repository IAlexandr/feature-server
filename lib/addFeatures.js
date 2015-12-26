var data = require('./data');
var dump = require('./dump');

module.exports = function (req, res) {
  dump('addFeatures', req.body);
  var features = JSON.parse(req.body.features);
  var addResults = data.addFeatures(features);
  return res.status(200).json({ code: 'ok', addResults: addResults });
};
