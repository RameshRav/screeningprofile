var gulp = require('gulp'),
  gutil = require('gulp-util'),
  jshint = require('gulp-jshint'),
  nodemon = require('gulp-nodemon'),
  concat = require('gulp-concat'),
  replace = require('gulp-replace-path'),
  clean = require('gulp-clean'),
  inject = require('gulp-inject'),
  uglify = require('gulp-uglify'),
  minifyCss = require('gulp-clean-css'),
  karma = require('karma').Server,
  sass = require('gulp-sass'),
  flatten = require('gulp-flatten'),
  path = {
    "scripts": ['./src/**/**/*.js'],
    "styles": ['./src/**/**/*.css'],
    "build": "./build",
    "vendor": ['./bower_components/jQuery/**/*.min.js', './bower_components/**/*.min.js'],
    "views": ['./src/**/**/**/*.html'],
    "data": ['./src/**/**/data/*.json'],
    "fonts": ['./src/css/fonts/*.*'],
    "image": ['./src/images/*.*']
}


gulp.task('autotest', function() {
  return gulp.watch(['www/js/**/*.js', 'test/spec/*.js'], ['test']);
});
// JS minify task
gulp.task('lint', function() {
  return gulp.src(path.scripts)
    .pipe(jshint())
    .pipe(concat('app.min.js'))
    //    .pipe(uglify())
    .pipe(gulp.dest(path.build));
});
// Images task
gulp.task('images', function() {
  gulp.src(path.image)
    .pipe(flatten())
    .pipe(gulp.dest(path.build + "/img/"));
});
// styles task
gulp.task('styles', function() {
  return gulp.src(path.styles)
    .pipe(minifyCss())
    .pipe(concat('vendor.min.css'))
    .pipe(gulp.dest(path.build));
});

// Html views task
gulp.task('views', function() {
  return gulp.src(path.views)
    .pipe(flatten())
    .pipe(gulp.dest(path.build + "/views/"));
});


gulp.task('sass', function() {
  return gulp.src('./src/sass/app.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(minifyCss())
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest(path.build));
//  .pipe(gulp.dest('./css'));
});

// Json data
gulp.task('json', function() {
  return gulp.src(path.data)
    .pipe(flatten())
    .pipe(gulp.dest(path.build + "/data/"));
});

// Html to inject js and css files
gulp.task('html', ["lint", "sass", "styles", "vendor"], function() {
  var target = gulp.src('./src/index.html');

  var sources = gulp.src(['./build/app.min.css', './build/vendor.min.css', './build/vendor.min.js', './build/app.min.js']);

  return target.pipe(inject(sources))
    .pipe(replace('/build', ''))
    .pipe(gulp.dest('./build'));
});

gulp.task('start', ["html"], function() {
  nodemon({
    script: 'server/server.js',
    ext: 'js html',
    env: {
      'NODE_ENV': 'development'
    }
  })
})

gulp.task('vendor', function() {
  return gulp.src(path.vendor)
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest(path.build));
});
gulp.task('fonts', function() {
  return gulp.src(path.fonts)
    .pipe(flatten())
    .pipe(gulp.dest(path.build + "/fonts/"));
});
gulp.task('default', function() {
  return gulp.src(path.build, {
    read: false
  })
    .pipe(clean());
});

gulp.task('watch', ['lint'], function() {
  // Watch our scripts
  gulp.watch(path.scripts, [
    'lint'
  ]);
  gulp.watch(path.views, [
    'views'
  ]);
  gulp.watch(path.styles, [
    'views'
  ]);
});

gulp.task('default', ['html', 'views', 'json', 'images', 'fonts', 'start', 'watch']);
