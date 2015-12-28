var data = require('./data');
var dump = require('./dump');

module.exports = function (req, res) {
  //dump('addFeatures', req.body);

  var features;
  if (req.body.features) {
    features = JSON.parse(req.body.features);
  } else {
    features = [];
  }

  var addResults = data.addFeatures(features);

  return res.status(200).json({ code: 'ok', addResults: addResults });
};
