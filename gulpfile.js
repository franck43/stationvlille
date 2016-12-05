/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are split into several files in the gulp directory
 *  because putting it all here was too long
 */

'use strict';

var fs = require('fs');
var gulp = require('gulp');
/*var xml2json = require('gulp-xml2json');
var request = require('request');
var gutil = require('gulp-util');*/



/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
fs.readdirSync('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});


/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});

/*gulp.task('getAndparseToJSON', function() {
	//request('http://vlille.fr/stations/xml-stations.aspx').pipe(fs.createWriteStream('xml-stations.aspx'));
	var xml = "<foo attr=\"value\">bar</foo>";
	var json = xml2json.toJson(xml);
	gutil.log('stuff happened', json, gutil.colors.magenta('123'));
});*/