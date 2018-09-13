//jshint strict: false
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    'todo-spec.js'
  ],
  onPrepare: function() {
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'target/screenshots'
       })
     );
    },
  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: '10.134.121.212/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }

};
