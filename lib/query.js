var data = require('./data');

module.exports = function (req, res) {
  var result = {};

  Object.assign(result, {
    "objectIdFieldName": "OBJECTID",
    "globalIdFieldName": "",
    "geometryType": "esriGeometryPoint",
    "spatialReference": {
      "wkid": 4326,
      "latestWkid": 4326
     },
  });

  result.fields = [
    {
      "name": "ukName",
      "alias": "ukName",
      "type": "esriFieldTypeString",
      "length": 500,
    },
    {
      "name": "controllerId",
      "alias": "controllerId",
      "type": "esriFieldTypeString",
      "length": 500,
    },
    {
      "name": "dNumber",
      "alias": "dNumber",
      "type": "esriFieldTypeString",
      "length": 500,
    },
    {
      "name": "time",
      "alias": "time",
      "type": "esriFieldTypeString",
      "length": 500,
    },
  ];

  result.features = data.getFeatures();

  res.json(result);
};
