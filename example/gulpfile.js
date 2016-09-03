var gulp = require('gulp'),
	gUtil = require('gulp-util'),
	concat = require('gulp-concat'),
	sourcemaps = require('gulp-sourcemaps');

gulp.task('watch', function() {
  gulp.watch('app/**/*.js', ['build-js']);
});

gulp.task('build-js', function() {
  return gulp.src('app/**/*.js')
    .pipe(sourcemaps.init())
      .pipe(concat('bundle.js'))
      //only uglify if gulp is ran with '--type production'
      //.pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build-js', 'watch']);
