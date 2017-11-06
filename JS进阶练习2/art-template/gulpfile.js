var gulp = require('gulp');
var gzip = require('gulp-gzip');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var imagemin = require('gulp-imagemin');

//1、创建任务
gulp.task('js', function() {
    gulp.src('template-web.js')
        // .pipe(babel({ presets: ['es2015'] }))
        .pipe(uglify())
        .pipe(gulp.dest('res/'));
});
gulp.task('img', function() {
    gulp.src('./*.jpg')
        .pipe(imagemin())
        .pipe(gulp.dest('res/'))
})

gulp.task('default', ['js']);