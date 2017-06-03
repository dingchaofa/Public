var gulp = require("gulp")
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
gulp.task('imagemin', function(){
  return gulp.src('public/img/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('postcss', function () { 
  var processors = [autoprefixer];
  return gulp.src('./public/*.css')
  .pipe(postcss(processors))
  .pipe(gulp.dest('./dest'));
 });

 gulp.task('convertcss', function(){
  return gulp.src('*.css')
    .pipe(cssnano())
    .pipe(gulp.dest('dist'));
})