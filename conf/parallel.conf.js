var config = {
  'commanCapabilities': {
    'browserstack.user': process.env.BROWSERSTACK_USERNAME || 'eldercerrato3',
    'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || 'kTN3uKCew9NSNqk5AdBh',
    'build': 'mocha-browserstack',
    'name': 'parallel_test',
    'browserstack.debug': 'true',
  },
  'multiCapabilities': [{
      'browserName': 'Chrome'
    },{
      'browserName': 'Safari'
    },{
      'browserName': 'Firefox'
    },{
      'browserName': 'IE'
  }]
};

exports.capabilities = [];
// Code to support common capabilities
config.multiCapabilities.forEach(function(caps) {
  var temp_caps = JSON.parse(JSON.stringify(config.commanCapabilities));
  for(var i in caps) temp_caps[i] = caps[i];
  exports.capabilities.push(temp_caps);
});
