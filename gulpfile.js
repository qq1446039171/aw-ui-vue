const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))// 把sass -> css
const minifyCSS = require('gulp-minify-css') // 压缩css

gulp.task('sass', async function () {
  return gulp.src('./components/css/**/*.scss').pipe(sass()).pipe(minifyCSS()).pipe(gulp.dest('dist/css'))
})
