// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
const path = require('path');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-junit-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    client:{
      clearContext: true
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true,
      dir: path.join(__dirname, 'test-results/coverage')
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['progress', 'junit'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    junitReporter: {
      outputDir: 'test-results',
      outputFile: undefined,
      suite: '',
      useBrowserName: true,
      nameFormatter: undefined,
      classNameFormatter: undefined,
      properties: {},
      xmlVersion: null
    }
  });
};
