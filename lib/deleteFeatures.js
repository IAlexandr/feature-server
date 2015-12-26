var data = require('./data');
var dump = require('./dump');

module.exports = function (req, res) {
  ump('deleteFeatures', req.body);
  return res.status(200).json({ code: 'ok' });
};
