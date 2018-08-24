const gulp = require('gulp');
const jr = require('gulp-json-replace');
const stripComments = require('gulp-strip-comments');

const vars = {
  "blue": "#00BCD4",
  "grey": "#12161f",
  "darkgrey": "#0d1016",
  "lightgrey": "#000000",
}

gulp.task('build', () => (
  gulp.src('./src/*.json')
  .pipe(jr({
    src: {
      "4am Blue.json": { ...vars },
      "4am.json": { ...vars }
    },
    identify: '%%'
  }))
  .pipe(stripComments())
  .pipe(gulp.dest('./'))
));