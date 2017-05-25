var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var htmlMin = require('gulp-htmlmin');
var inlineSource = require('gulp-inline-source');
var imageOptim = require('gulp-image');
var jshint = require('gulp-jshint');
var cache = require('gulp-cache');
var responsive = require('gulp-responsive-images');



gulp.task('scripts', function() {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
    gulp.src('views/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/views/js'));
});


gulp.task('styles', function() {
  gulp.src('src/css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'));
    gulp.src('src/views/css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/views/css'));
});


gulp.task('compact', function() {
    gulp.src('src/*.html')
        .pipe(inlineSource())
        .pipe(htmlMin({collapseWhitespace: true, removeComments: true, minifyJS: true}))
        .pipe(gulp.dest('dist'));
    gulp.src('src/views/pizza.html')
        .pipe(inlineSource())
        .pipe(htmlMin({collapseWhitespace: true, removeComments: true, minifyJS: true}))
        .pipe(gulp.dest('dist/views'));
});


gulp.task('imgs', function () {
  return gulp.src(['src/img/*.png','src/img/*.jpg'])
    .pipe(cache(imageOptim()))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('pizzeriaViews', function() {
  return gulp.src('src/views/images/pizzeria.jpg')
    .pipe(responsive({
      'pizzeria.jpg': {
        width: 100,
        suffix: '-100'
      }
    }))
    .pipe(gulp.dest('dist/views/images'));
})

// this to be run after index task for the changed image width

gulp.task('imagesViews', function () {
  return gulp.src(['src/views/images/*.png','src/views/images/*.jpg'])
    .pipe(cache(imageOptim()))
    .pipe(gulp.dest('dist/views/images'));
});


gulp.task('lint', function() {
    return gulp.src('src/views/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('default',['scripts','styles','compact','imgs','pizzeriaViews','lint', 'imagesViews']);






