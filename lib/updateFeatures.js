var data = require('./data');
var dump = require('./dump');

module.exports = function (req, res) {
  dump('updateFeatures', req.body);
  var features = JSON.parse(req.body.features);
  var updateResults = data.updateFeatures(features);
  return res.status(200).json({ code: 'ok', updateResults: updateResults });
};
