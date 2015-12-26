var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');

module.exports = function(anno, data) {
  if (process.env.DODUMP) {
    var name = anno + '-' + (new Date()).toISOString().replace(/[:\.]/g, '_') + '.json';
    var dirPath = path.resolve(__dirname, '../dumps');
    var filePath = path.join(dirPath, name);
    mkdirp.sync(dirPath);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));    
  }
}
