var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var filter = require('gulp-filter');
var streamify = require('gulp-streamify');
var bower = require('main-bower-files');
var streamqueue = require('streamqueue');

function scripts(paths) {
  return browserify({ entries: paths.src, debug: true })
    .transform(babelify)
    .bundle()
    .pipe(source(paths.file));
}

function dependencies() {
  var files = bower();
  return gulp.src(files)
    .pipe(filter(['*.js']));
}

module.exports = function(paths) {
  return streamqueue({ objectMode: true }, dependencies(paths), scripts(paths))
    .pipe(streamify(concat(paths.file)));
};
