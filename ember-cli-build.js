/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    fingerprint : {
			enabled : false
		},
		sourcemaps : {
			enabled : false
		},
    outputPaths : {
      fingerprint : {
			enabled : false
		},
		sourcemaps : {
			enabled : false
		},
			app : {
				js : 'assets/vaccination-app.js',// No I18N
				css : {
					app:'assets/vaccination-app.css',
				}
			},
			vendor : {
				css : 'assets/vendor.css',
				js : 'assets/vendor.js'
			}
		},
		sassOptions: {
	      extension: 'scss',// No I18N
	      includePaths: [ 'app/styles' ]// No I18N
	    }
  });
  app.options.storeConfigInMeta = false;
  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
