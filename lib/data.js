// TODO "objectIdFieldName" вынести в настройки
var dump = require('./dump');
var objectIdFieldName = "OBJECTID";
var dataReestr = {
  objectIdCounter: 0,
  getFeatures: function (bounds) {
    var _this = this;
    var result = [];
    Object.keys(_this.data).forEach(function (key) {
      var coords = _this.data[key].geometry;
      if (bounds) {
        if (coords.x >= bounds.xmin && coords.x <= bounds.xmax &&
          coords.y >= bounds.ymin && coords.y <= bounds.ymax) {
          result.push(_this.data[key]);
        }
      } else {
        result.push(_this.data[key]);
      }
    });
    return result;
  },
  addFeatures: function (features) {
    var _this = this;
    var prepArr = {};
    features.forEach(function (feature) {
      if (_this.featureCheck(feature)) {
        if (!prepArr.hasOwnProperty(feature.attributes.controllerId)) {
          _this.objectIdCounter += _this.objectIdCounter + 1;
          feature.attributes[objectIdFieldName] = _this.objectIdCounter;
          prepArr[feature.attributes.controllerId] = feature;
        } else {
          feature.attributes[objectIdFieldName] = prepArr[feature.attributes.controllerId].attributes[objectIdFieldName];
          prepArr[feature.attributes.controllerId] = feature;
        }
      } else {
        dump('data-reestr-warnings', JSON.stringify(feature));
      }
    });
    var resultAddFeatures = [];
    Object.keys(prepArr).forEach(function (key) {
      resultAddFeatures.push(prepArr[key]);
    });
    _this.updateData(resultAddFeatures);
    return _this.getFeatures();
  },
  updateFeatures: function (features) {
    var _this = this;
    var resultUpdateFeatures = [];
    features.forEach(function (feature) {
      if (_this.featureCheck(feature)) {
        resultUpdateFeatures.push(feature);
      } else {
        dump('data-reestr-warnings', JSON.stringify(feature));
      }
    });
    _this.updateData(resultUpdateFeatures);
    return _this.getFeatures();
  },
  deleteFeatures: function (expression) {
    // TODO удалять по expression, пока удаляются все
    this.data = [];
    // TODO что и в каком формате вернуть?
    return [];
  },
  data: {
    //"1": {
    //  geometry: {
    //    "x": 56.121465,
    //    "y": 47.263714,
    //  },
    //  attributes: {
    //    OBJECTID: 1,
    //    ukName: "УК Вертикаль",
    //    controllerId: "118107",
    //    dNumber: "53-49",
    //    time: "26.12.2015, 4:29:03",
    //  },
    //}
  },
  updateData (features) {
    var _this = this;
    features.forEach(function (feature) {
      var objectId = feature.attributes[objectIdFieldName];
      _this.data[objectId] = feature;
    });
  },
  featureCheck: function (feature) {
    var result = false;
    if (feature) {
      var coords = feature.geometry;
      if (coords) {
        if (coords.x && coords.y) {
          result = true;
        }
      }
    }
    return result;
  }
};

module.exports = dataReestr;
