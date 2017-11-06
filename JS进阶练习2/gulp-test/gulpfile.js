var gulp = require('gulp');
var uglify = require('gulp-uglify');
//创建任务
gulp.task('js', function() {
    gulp.src('./res/*.js').
    pipe(uglify()).
    pipe(gulp.dest('dist'))
});