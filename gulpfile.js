// paths variables
var js   = [ 'app/javascript/*.js' ];
var css  = [ 'public/build/css/style.css' ];
var html = [ 'app/src/*.html' ];

// var initial
var gulp             = require('gulp');
var uglify           = require("gulp-uglify");

// var properties
var watch            = require('gulp-watch');
var concat           = require("gulp-concat");
var cssmin           = require("gulp-cssmin");
var htmlmin          = require('gulp-htmlmin');
var stripCssComments = require('gulp-strip-css-comments');

// minify css
gulp.task('minify-css', function(){
  return gulp.src(css)
    .pipe(concat('style.min.css'))
    .pipe(stripCssComments({all: true}))
    .pipe(cssmin())
    .pipe(gulp.dest('public/build/css/'));
});

// minify javascript
gulp.task('minify-js', function () {
  return  gulp.src(js)
    .pipe(concat('script.min.js'))
    .pipe(stripCssComments({all: true}))
    .pipe(uglify())
    .pipe(gulp.dest('public/build/js'));
});

// minify html
gulp.task('minify-html', function() {
  return gulp.src(html)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('public'));
});

// callback to all tasks
gulp.task('default',['minify-js','minify-css', 'minify-html']);

// watch callbacks
gulp.task('watch', function() {
    gulp.watch(js, ['minify-js']);
    gulp.watch(css, ['minify-css']);
    gulp.watch(html, ['minify-html']);
});
