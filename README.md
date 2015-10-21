# gulp
Some commonly used Gulp tasks

## Installation

```
npm install --save-dev @benjaminreid/gulp
```

## Usage

```
var gulp = require('gulp');
var tasks = require('@benjaminreid/gulp');

gulp.task('scripts', function() {
  return tasks.es6({ src: './scripts/main.js', file: 'main.js' })
    .pipe(gulp.dest('./dist'));
});
```
