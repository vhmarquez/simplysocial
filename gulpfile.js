///////////////////////////////////////////////
// NODE MODULES
// =========================

var	gulp = require('gulp'),
	watch = require('gulp-watch'),
	rename = require('gulp-rename'),
	compass = require('gulp-compass'),
	minifyCSS = require('gulp-minify-css'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant');

// Default gulp tasks
gulp.task('default', function() {

});

// Compile SASS and Minify CSS
gulp.task('compass', function() {
	gulp.src('temp/sass/**/*.sass')
		.pipe(compass({
			css: 'temp/css',
			sass: 'temp/sass'
		}))
		.pipe(gulp.dest('temp/css'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifyCSS())
		.pipe(gulp.dest('architecture/css'));
});

// Uglify JS
gulp.task('compress', function(){
	gulp.src('temp/js/**/*.js')
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('architecture/js'));
});

// Minify all CSS
gulp.task('minify-css', function(){
	gulp.src('temp/css/*.css')
		.pipe(rename({suffix: '.min'}))
		.pipe(minifyCSS())
		.pipe(gulp.dest('architecture/css'));
});

// Image Minifier
gulp.task('imagemin', function(){
	gulp.src('temp/img/**/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('assets/img'));
});

// Watch Task
gulp.task('watch', function(){
	gulp.watch('temp/sass/**/*.sass', ['compass'])
	gulp.watch('temp/js/**/*.js', ['compress'])
	gulp.watch('temp/img/**/*', ['imagemin']);
});