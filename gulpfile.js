var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var htmlMin = require('gulp-htmlmin');
var inlineSource = require('gulp-inline-source');
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
var cache = require('gulp-cache');
var responsive = require('gulp-responsive-images');
var pump = require('pump');



gulp.task('scripts', function() {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});


gulp.task('scriptsViews', function (cb) {
  pump([
        gulp.src('src/views/js/main.js'),
        uglify(),
        gulp.dest('dist/views/js')
    ],
    cb
  );
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

gulp.task('imgs', function() {
  return gulp.src(['src/img/*.jpg','src/img/*.png'])
    .pipe(imagemin([
          imagemin.jpegtran({progressive: true}),
          imagemin.optipng({optimizationLevel: 5})
    ]))
    .pipe(gulp.dest('dist/img'));
});


// producing two images of different sizes from same source

gulp.task('pizzeriaResize', function() {
  return gulp.src('src/views/images/pizzeria.jpg')
    .pipe(responsive({
      'pizzeria.jpg': [
      {
        width: 100,
        suffix: '-100',
      },{
        width: '20%',
        rename: 'pizzeria-small.jpg'
    }
    ]
  }))
    .pipe(gulp.dest('src/views/images')); // saved back in source dir
})

gulp.task('imagesViews', function () {
  return gulp.src(['src/views/images/*.png', 'src/views/images/*.jpg'])
    .pipe(imagemin())
    .pipe(gulp.dest('dist/views/images'));
});



gulp.task('lint', function() {
    return gulp.src('src/views/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('default',['scripts','scriptsViews','styles','compact', 'imgs', 'pizzeriaResize','imagesViews' ,'lint']);






