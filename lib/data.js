// TODO "objectIdFieldName" вынести в настройки

var objectIdFieldName = "OBJECTID";
var dataReestr = {
  objectIdCounter: 0,
  getFeatures: function () {
    var _this = this;
    var result = [];
    Object.keys(_this.data).forEach(function (key) {
      result.push(_this.data[key]);
    });
    return result;
  },
  addFeatures: function (features) {
    var _this = this;
    features.forEach(function (feature) {
      _this.objectIdCounter += _this.objectIdCounter + 1;
      feature.attributes[objectIdFieldName] = _this.objectIdCounter;
    });
    _this.updateData(features);
    // TODO что и в каком формате вернуть?
  },
  updateFeatures: function (features) {
    var _this = this;
    _this.updateData(features);
    // TODO что и в каком формате вернуть?
  },
  deleteFeatures: function (expression) {
    // TODO удалять по expression, пока удаляются все
    this.data = [];
    // TODO что и в каком формате вернуть?
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
  }
};

module.exports = dataReestr;
