var data = require('./data');

module.exports = function (req, res) {
  var updateResults = data.updateFeatures(req.body);
  return res.status(200).json({ code: 'ok', updateResults: updateResults });
};
