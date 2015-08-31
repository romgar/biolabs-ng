// gulp
var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');
var clean = require('gulp-clean');



gulp.task('connect', function () {
  connect.server({
    root: 'app/',
    port: 8888
  });
});

gulp.task('connect-dist', function () {
  connect.server({
    root: 'dist/',
    port: 9999
  });
});


gulp.task('clean', function() {
    gulp.src('./dist/*')
      .pipe(clean({force: true}));
});

gulp.task('copy-css', function() {
  var opts = {comments:true,spare:true};
  gulp.src(['./app/**/*.css', '!./app/bower_components/**'])
    .pipe(gulp.dest('./dist/'))
});

gulp.task('copy-js', function() {
  gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
    .pipe(gulp.dest('./dist/'))
});

gulp.task('copy-bower-components', function () {
  gulp.src('./app/bower_components/**')
    .pipe(gulp.dest('dist/bower_components'));
});

gulp.task('copy-html-files', function () {
  gulp.src('./app/**/*.html')
    .pipe(gulp.dest('dist/'));
});

// build task
gulp.task('build',
  ['copy-css', 'copy-js', 'copy-html-files', 'copy-bower-components']
);
