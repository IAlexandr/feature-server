var data = require('./data');

module.exports = function (req, res) {
  var deleteResults = data.addFeatures();
  return res.status(200).json({ code: 'ok', deleteResults: deleteResults });
};
