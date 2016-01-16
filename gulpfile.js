var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var $ = require('gulp-load-plugins')();

gulp.task('default', function () {
    console.log("I'm not doing anything.. yet!");
});
gulp.task('less', function () {
    console.log("Compiling LESS");
    return gulp.src('./scu-less/scu.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./dist/css'));
});
gulp.task('docs', ['less'], function () {
    console.log('Moving assets over to docs/dist');
    gulp.src("./dist/**/*")
        .pipe(gulp.dest('./docs/dist'));

    console.log('Done. Rebuilding docs.');
    return gulp.src(['./docs/_config.yml'])
        .pipe($.shell([
            'cd docs/ && jekyll build --config <%= file.path %>'
        ]))
});
gulp.task('deploy', function () {

});