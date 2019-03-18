exports.capabilities = {
  'browserstack.user': process.env.BROWSERSTACK_USERNAME || 'eldercerrato3',
  'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || 'kTN3uKCew9NSNqk5AdBh',
  'build': 'mocha-browserstack',
  'name': 'local_test',
  'browserstack.debug': 'true',

  'browserName': 'chrome',
  'browserstack.local': true
};
