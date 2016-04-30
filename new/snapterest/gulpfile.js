var gulp = require('gulp')

/*gulp.task('default', function()
{
	console.log('I am about to lean the essentials of React.js')

});*/

var browserify = require('browserify')
var babelify = require('babelify')
var source = require('vinyl-source-stream')

gulp.task('default', function()
{
	return browserify('./source/app.js').transform(babelify, {presets: "react"}).bundle().
		   pipe(source('snapterest.js')).
		   pipe(gulp.dest('./build/'));



	});