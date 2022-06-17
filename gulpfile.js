const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass')) // 把sass -> css
const minifyCSS = require('gulp-minify-css') // 压缩css

gulp.task('sass', async function () {
  // return gulp.src('./components/css/**/*.scss').pipe(sass()).pipe(minifyCSS()).pipe(gulp.dest('dist/css'))  //打包成多个css文件
  return gulp.src('./components/css/index.scss').pipe(sass()).pipe(minifyCSS()).pipe(gulp.dest('dist/css'))
})
