var gulp = require('gulp');
var jade = require('gulp-jade');
var less = require('gulp-less');
var lint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var copy = require('gulp-copy');

var paths = {
  jadesrc: ['./client/**/*.jade'],
  viewssrc: ['./server/views/**/*.jade'],
  lesssrc: ['./client/**/*.less'],
  codesrc: ['./client/**/*.js', './server/**/*.js'],
  clientsrc: ['./client/**/*.js', './client/**/*.mp3', './client/**/*.jpg', './client/**/*.wav', './client/**/*.png'],
  jadedst: './public',
  lessdst: './public',
  clientdst: './public'
};

gulp.task('build', ['jade', 'less', 'lint', 'jscs', 'copy']);
gulp.task('default', ['build', 'watch']);

gulp.task('jade', function() {
  gulp.src(paths.jadesrc)
    .pipe(jade({pretty: true, doctype: 'html'}))
    .on('error', console.error.bind(console))
    .pipe(gulp.dest(paths.jadedst));
});

gulp.task('less', function() {
  gulp.src(paths.lesssrc)
    .pipe(less())
    .on('error', console.error.bind(console))
    .pipe(gulp.dest(paths.lessdst));
});

gulp.task('lint', function() {
  gulp.src(paths.codesrc)
    .pipe(lint())
    .pipe(lint.reporter('jshint-stylish'));
});

gulp.task('jscs', function() {
  gulp.src(paths.codesrc)
    .pipe(jscs())
    .on('error', function (err) {
      console.log(err.message);
      this.emit('end');
    });
});

gulp.task('copy', function() {
  gulp.src(paths.clientsrc)
    .pipe(copy(paths.clientdst, {prefix:1}));
});

gulp.task('watch', function() {
  gulp.watch(paths.viewssrc, ['jade']);
  gulp.watch(paths.jadesrc, ['jade']);
  gulp.watch(paths.lesssrc, ['less']);
  gulp.watch(paths.codesrc, ['lint', 'jscs', 'copy']);
});
