var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var filter = require('gulp-filter');
var streamify = require('gulp-streamify');
var bower = require('main-bower-files');
var streamqueue = require('streamqueue');
var autoprefixer = require('gulp-autoprefixer');

function styles(paths) {
  return gulp.src(paths.src)
    .pipe(sass().on('error', sass.logError));
}

function dependencies() {
  var files = bower();
  return gulp.src(files)
    .pipe(filter(['*.css']));
}

module.exports = function(paths) {
  return streamqueue({ objectMode: true }, dependencies(paths), styles(paths))
    .pipe(streamify(concat(paths.file)))
    .pipe(autoprefixer());
};
