var optionsSpec = {
  port: {
    required: true,
    default: '8060',
    env: 'PORT'
  },
};

var options = {
  version: require('./package.json').version
};
Object.keys(optionsSpec).forEach(function (key) {
  var item = optionsSpec[key];
  if (!item.preprocess) {
    item.preprocess = function (src) {
      return src;
    };
  }

  if (process.env[item.env]) {
    options[key] = item.preprocess(process.env[item.env]);
  } else if (item.default) {
    console.warn('USING DEFAULT OPTION FOR:', key);
    options[key] = item.preprocess(item.default);
  } else if (item.required) {
    throw new Error('!!! REQUIRED OPTION NOT SET: ' + key);
  }
});

module.exports = options;
