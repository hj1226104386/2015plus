/**
 * @author:huangjin
 * @parameter:
 * @description:
 * @Date:2017/11/17
 */
//引入gulp
var gulp = require('gulp');


//引入组件
var concat = require('gulp-concat');           //合并
var jshint = require('gulp-jshint');           //js规范验证
var uglify = require('gulp-uglify');           //压缩
var amdOptimize = require("amd-optimize");           //require优化

//require合并
gulp.task('rjs', function () {
    gulp.src('./src/js/**/*.js')
        .pipe(amdOptimize("main", {
            //require config
            paths: {
                "jquery": "../../libs/jquery/dist/jquery.min",
                "jquery.serializeJSON": "../../libs/jquery.serializeJSON/jquery.serializejson.min",
                "sug": "src/js/suggestion/suggestion",
                "validate": "../util/src/js/util/validate",
                "urlParam": "../util/src/js/util/url.param"
            },
            shim: {
                "jquery.serializeJSON": ['jquery']
            }
        }))
        .pipe(concat("index.js"))           //合并
        .pipe(gulp.dest("dist/js"))          //输出保存
        .pipe(rename("index.min.js"))          //重命名
        .pipe(uglify())                        //压缩
        .pipe(gulp.dest("dist/js"));         //输出保存
});



