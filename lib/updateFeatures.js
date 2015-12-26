var data = require('./data');
var dump = require('./dump');

module.exports = function (req, res) {
  dump('updateFeatures', req.body);
  var updateResults = data.updateFeatures(req.body);
  return res.status(200).json({ code: 'ok', updateResults: updateResults });
};
