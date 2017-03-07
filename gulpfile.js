var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');

gulp.task('scss', function() {
	gulp.src('scss/main.scss')
	.pipe(plumber())
	.pipe(sass())
	.pipe(gulp.dest('css'));
});

gulp.task('default', function() {
	gulp.run('scss');
	gulp.watch('scss/**/*.scss', function(event) {
		gulp.run('scss');
	});
});