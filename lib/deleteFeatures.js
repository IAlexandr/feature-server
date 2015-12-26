var data = require('./data');
var dump = require('./dump');

module.exports = function (req, res) {
  dump('deleteFeatures', req.body);
  var deleteResults = data.deleteFeatures();
  return res.status(200).json({ code: 'ok', deleteResults: deleteResults });
};
