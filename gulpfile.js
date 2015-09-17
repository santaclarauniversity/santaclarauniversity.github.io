var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var jekyll = require('gulp-jekyll');

gulp.task('default', function() {
    console.log("I'm not doing anything but I look cool");
});
gulp.task('less', function () {
    return gulp.src('./less/**/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./public/css'));
});
gulp.task('docs', function() {
    gulp.src(['./index.html', './_layouts/*.html', './_posts/*.{markdown,md}'])
        .pipe(jekyll({
            source: './',
            destination: './deploy/',
            bundleExec: true
        }))
        .pipe(gulp.dest('./deploy/'));
});
gulp.task('deploy', function() {

});