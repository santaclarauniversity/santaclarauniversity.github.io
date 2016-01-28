var gulp = require('gulp');
var path = require('path');
var merge = require('merge-stream');
var rename = require('gulp-rename');
var clone = require('gulp-clone');
var runSequence = require('run-sequence');
var $ = require('gulp-load-plugins')();

gulp.task('default', function () {
    console.log("I'm not doing anything.. yet!");
});

// Less->CSS compiler, lint checker, minifier
gulp.task('css', function () {
    var less = require('gulp-less');
    var lint = require('gulp-csslint');
    var nano = require('gulp-cssnano');

    console.log('Compiling LESS to CSS..');

    var css = gulp.src('./scu-less/scu.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./dist/css'));

    console.log('Checking compiled CSS for lint..');

    var lintOutput = gulp.src('./dist/css/scu.css')
        .pipe(lint())
        .pipe(lint.reporter())
        .pipe(lint.failReporter());

    // If we don't pass the lint test here, return the failing output and pause.
    if (!lintOutput.success) {
        return lintOutput;
    }

    console.log('CSS passed all checks - minifying..');

    var min = css.pipe(clone())
        .pipe(nano())
        .pipe(rename('scu.min.css'));

    return merge(css, min)
        .pipe(gulp.dest('./dist/css/'));
});

// JS lint checker, style consistency checker, minifier
gulp.task('js', function () {
    var jshint = require('gulp-jshint');
    var jscs = require('gulp-jscs');
    var minify = require('gulp-minify');

    console.log('Checking for lint in JS..');

    var lintOutput = gulp.src('./js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter())
        .pipe(jshint.reporter('fail'));

    // Stop if we fail lint check
    if (!lintOutput.success) {
        return lintOutput;
    }

    console.log('Checking for style consistency in JS..');

    var jscsOutput = gulp.src('./js/*.js')
        .pipe(jscs())
        .pipe(jscs.reporter())
        .pipe(jscs.failReporter());

    // Stop if we fail style check
    if (!jscsOutput.success) {
        return jscsOutput;
    }

    console.log('JS passed all checks - minifying..');

    return gulp.src('./js/*.js')
        .pipe(minify({
            ext: {
                min: '.min.js'
            }
        }))
        .pipe(gulp.dest('./dist/js/'));
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

// Runs the whole pipeline in sequence (and exits appropriately if there are any breaking failures)
gulp.task('deploy', function () {
    runSequence('css', 'js', function(err) {
        if (!err) {
            console.log('Good job, you managed to not cause any errors!');
        }
    });
});
