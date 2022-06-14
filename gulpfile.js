const gulp = require('gulp');
const del = require('del');
const less = require('gulp-less');
const server = require("browser-sync").create();
const path = require('path');
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const htmlmin = require("gulp-htmlmin");
const cssnano = require('cssnano');

gulp.task('less', function () {
  return gulp.src('./src/less/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(plumber())
    .pipe(postcss([
      autoprefixer(),
      cssnano()
    ]))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('html', function () {
  return gulp.src('./src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('./public'));
});

gulp.task('js', function () {
  return gulp.src('./src/*.js')
    .pipe(gulp.dest('./public'));
})

gulp.task('clean', function () {
  return del('public');
});

gulp.task('server', function () {
  server.init({
    server: 'public/'
  })

  gulp.watch('./src/less/*.less').on('change', gulp.series('less', 'refresh'));
  gulp.watch('./src/*.html').on('change', gulp.series('html', 'refresh'));
  gulp.watch('./src/*.js').on('change', gulp.series('js', 'refresh'));
});

gulp.task('refresh', function (done) {
  server.reload();
  done();
});

gulp.task('build', gulp.series(
  'clean',
  'less',
  'html',
  'js'
));

gulp.task('start', gulp.series(
  'build', 'server'
))