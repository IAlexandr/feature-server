var express = require('express');

var router = express.Router();

module.exports = router;

var prefix = '/FeatureServer/0';

router.get(prefix + '/', require('./home'));
router.get(prefix + '/query', require('./query'));
router.post(prefix + '/addFeatures', require('./addFeatures'));
router.post(prefix + '/updateFeatures', require('./updateFeatures'));
router.post(prefix + '/deleteFeatures', require('./deleteFeatures'));
