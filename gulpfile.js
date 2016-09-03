var gulp = require('gulp'),
	gUtil = require('gulp-util'),
	concat = require('gulp-concat'),
	sourcemaps = require('gulp-sourcemaps'),
	uglify = require('gulp-uglify'),
	mainBowerFiles = require('main-bower-files'),
	_ = require('lodash');

gulp.task('watch', function() {
  gulp.watch('src/**/*.js', ['build-js']);
});

gulp.task('build-js', function() {
	console.log(mainBowerFiles());
  	var garudFiles = gulp.src(_.flatten(['src/**/*.js', mainBowerFiles()]))
	    .pipe(sourcemaps.init())
	  	.pipe(concat('garud.js'))
		//.pipe(uglify())
	    .pipe(sourcemaps.write())
	    .pipe(gulp.dest('.'));
});

gulp.task('default', ['build-js', 'watch']);
