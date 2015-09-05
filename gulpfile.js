// gulp
var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');
var clean = require('gulp-clean');



gulp.task('connect', function () {
  connect.server({
    root: 'app/',
    port: 8888,
    livereload: true
  });
});

gulp.task('connect-dist', function () {
  connect.server({
    root: 'dist/',
    port: 9999
  });
});


gulp.task('clean', function() {
  return gulp.src('./dist/*')
      .pipe(clean({force: true}));
});

gulp.task('copy-css', ['clean'], function() {
  gulp.src(['./app/**/*.css', '!./app/bower_components/**'])
    .pipe(gulp.dest('./dist/'))
});

gulp.task('copy-js', ['clean'], function() {
  gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
    .pipe(gulp.dest('./dist/'))
});

gulp.task('copy-bower-components', ['clean'], function () {
  gulp.src('./app/bower_components/**')
    .pipe(gulp.dest('dist/bower_components'));
});

gulp.task('copy-html-files', ['clean'], function () {
  gulp.src('./app/**/*.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('copy-site-files', ['clean'], function () {
  gulp.src(['./app/CNAME', './app/favicon.ico', './app/robots.txt'])
    .pipe(gulp.dest('dist/'));
});


// build task
gulp.task('build',
  ['copy-css', 'copy-js', 'copy-html-files', 'copy-bower-components', 'copy-site-files']
);
