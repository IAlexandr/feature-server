var data = require('./data');
var dump = require('./dump');

module.exports = function (req, res) {
  dump('deleteFeatures', req.body);
  var deleteResults = data.addFeatures();
  return res.status(200).json({ code: 'ok', deleteResults: deleteResults });
};
