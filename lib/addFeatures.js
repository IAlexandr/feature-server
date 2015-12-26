var data = require('./data');
var dump = require('./dump');

module.exports = function (req, res) {
  dump('addFeatures', req.body);
  return res.status(200).json({ code: 'ok' });
};
