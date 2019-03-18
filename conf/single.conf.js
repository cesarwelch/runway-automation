exports.capabilities = {
  'browserstack.user': process.env.BROWSERSTACK_USERNAME || 'eldercerrato3',
  'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || 'kTN3uKCew9NSNqk5AdBh',
  'build': 'aqua-automation',
  'name': 'login',
  'browserstack.debug': 'true',

  'browserName': 'chrome'
};
