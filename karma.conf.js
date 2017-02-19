// Karma configuration

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],


    // list of files to load in the browser
    files: [ 
		"./bower_components/angular/*.min.js",
		"./bower_components/**/*.min.js",
		"./bower_components/angular-mocks/angular-mocks.js",
		"src/*.js",
	    "src/app/**/*.module.js",	
   	    "src/router/routerHelperProvider.js",
		"src/**/*.js",
		"src/**/**/*.js",
	    "src/**/**/**/*.js",
		"./test/app/**/**/*.js"
    ],


    // list of files to exclude
    exclude: [
    ],



    preprocessors: {
		"src/*.js" : ['coverage'],
	    "src/app/**/*.module.js": ['coverage'],	
		"src/**/*.js" : ['coverage'],
		"src/**/**/*.js": ['coverage'],
	    "src/**/**/**/*.js": ['coverage']
    },



    reporters: ['progress', 'coverage'],
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    // web server port
    port: 9876,





    colors: true,



    logLevel: config.LOG_INFO,



    autoWatch: true,



    browsers: ['Chrome'],



    singleRun: false,


    concurrency: Infinity
  })
}
