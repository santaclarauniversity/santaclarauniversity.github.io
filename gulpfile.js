'use strict';

// fabricator modules
var assemble = require('fabricator-assemble');
var browserSync = require('browser-sync');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var imagemin = require('gulp-imagemin');
var prefix = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var reload = browserSync.reload;
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var webpack = require('webpack');

// custom modules
var clone = require('gulp-clone');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var lessReporter = require('gulp-csslint-less-reporter');
var lint = require('gulp-csslint');
var minify = require('gulp-minify');
var nano = require('gulp-cssnano');

// configuration
// Top-level navigation
var rootConfig = {
    assets: './assets/',
    bower: './bower_components/',
    css: './css/',
    dist: './dist/',
    fabricator: './src/assets/fabricator/',
    js: './js/',
    less: './less/',
    sass: './sass',
};

// Subsets of root navigation
var config = {
    dev: gutil.env.dev,
	// Paths to "source" files that need to be compiled
    src: {
        scripts: {
            fabricator: rootConfig.fabricator + 'scripts/fabricator.js',
            scu: rootConfig.js + 'scu.js',
            bower: {
                jquery: rootConfig.bower + 'jquery/dist/jquery.min.js',
                jqueryUi: rootConfig.bower + 'jquery-ui/jquery-ui.min.js',
                bootstrap: rootConfig.bower + 'bootstrap/dist/js/bootstrap.min.js',
                jquerySwipe: rootConfig.bower + 'jquery.event.swipe/js/jquery.event.swipe.js',
                mediaCheck: rootConfig.bower + 'mediaCheck/js/mediaCheck-min.js',
                html5shiv: rootConfig.bower + 'html5shiv/dist/html5shiv.min.js',
	            holder: rootConfig.bower + 'holderjs/holder.min.js',
            },
        },
        styles: {
            fabricator: rootConfig.fabricator + 'styles/fabricator.scss',
            bootstrap: rootConfig.less + 'bootstrap.less',
            scu: rootConfig.less + 'scu.less',
            ieCompatibility: rootConfig.less + 'ie.less',
            landingPages: {
				startup: rootConfig.less + 'bootstrap/landing-pages/impl/startup.less',
				minimal: rootConfig.less + 'bootstrap/landing-pages/impl/minimal.less',
				bold: rootConfig.less + 'bootstrap/landing-pages/impl/bold.less',
			},
            bower: {
                jqueryUi: rootConfig.bower + 'smoothness/jquery-ui.min.css',
            },
        },
        views: [
            'src/views/**/*', '!src/views/+(layouts)/**'
        ],
    },
	// Paths to "output" files that either do not get compiled/have already been compiled
    out: {
        scripts: rootConfig.js,
        styles: {
            fabricator: rootConfig.css + 'fabricator/',
            scu: rootConfig.css,
        },
    },
};


// webpack
var webpackConfig = require('./webpack.config')(config);
var webpackCompiler = webpack(webpackConfig);


// clean
gulp.task('clean', function(cb) {
    del([rootConfig.dist], cb);
});


// styles
gulp.task('styles:fabricator', function() {
    gulp.src(config.src.styles.fabricator)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix('last 1 version'))
        .pipe(gulpif(!config.dev, csso()))
        .pipe(rename('f.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.out.styles.fabricator))
        .pipe(gulpif(config.dev, reload({
            stream: true
        })));
});

/**
 * Attempts to pipe data from a LESS source path into its corresponding destination path.
 *
 * @param src		The source folder of the LESS code (string).
 * @param des		The destination folder of the compiled, minified CSS file (string).
 * @param linter	Whether to run CSSLint on the inputted source code.
 * @return			Gulp pipe of output which is sent to its destination.
 */
function pipeLess(src, des, linter) {
    // Compile LESS
    var css = gulp.src([src, '!' + src + '**/*.min.css'])
        .pipe(sourcemaps.init())
        .pipe(less());

    // Run CSSLint is designated
    if (linter) {
        css.pipe(lint())
            .pipe(lessReporter(src));
    }

    // Return output after it has been minified and copied from *.css to *.min.css
    // Note that this produces both unminified and minified due to clone()
    return css.pipe(clone())
        .pipe(gulp.dest(des))
        .pipe(nano())
        .pipe(rename({
            suffix: '.min',
        }))
        .pipe(gulp.dest(des));
}

gulp.task('styles:bootstrap', function() {
    return pipeLess(config.src.styles.bootstrap, config.out.styles.scu, false);
});

gulp.task('styles:ieCompatibility', function() {
    return pipeLess(config.src.styles.ieCompatibility, config.out.styles.scu, true);
});

gulp.task('styles:landingPages', function() {
	for (var include in config.src.styles.landingPages) {
		pipeLess(config.src.styles.landingPages[include], config.out.styles.scu, false);
	}
});

gulp.task('styles:scu', function() {
    return pipeLess(config.src.styles.scu, config.out.styles.scu, true);
});

gulp.task('styles:bower', function() {
    for (var include in config.src.styles.bower) {
        gulp.src(config.src.styles.bower[include])
            .pipe(clone())
            .pipe(gulp.dest(config.out.styles.scu));
    }
});

gulp.task('styles', ['styles:fabricator', 'styles:bootstrap', 'styles:ieCompatibility',
    'styles:landingPages', 'styles:scu', 'styles:bower']);


// scripts
gulp.task('scripts:fabricator', function(done) {
    webpackCompiler.run(function(error, result) {
        if (error) {
            gutil.log(gutil.colors.red(error));
        }
        result = result.toJson();
        if (result.errors.length) {
            result.errors.forEach(function(error) {
                gutil.log(gutil.colors.red(error));
            });
        }
        done();
    });
});

gulp.task('scripts:scu', function() {
    for (var include in config.src.scripts.bower) {
        gulp.src(config.src.scripts.bower[include])
            .pipe(clone())
            .pipe(gulp.dest(config.out.scripts));
    }

    // Before we write the JS out in scripts:fabricator, we want to validate it all
    return gulp.src(config.src.scripts.scu)
        .pipe(jshint())
        .pipe(jshint.reporter())
        .pipe(jshint.reporter('fail'))
        .pipe(jscs())
        .pipe(jscs.reporter())
        .pipe(jscs.reporter('fail'))
        .pipe(minify({
            ext: {
                min: '.min.js',
            },
        }))
        .pipe(gulp.dest(config.out.scripts));
});

gulp.task('scripts', ['scripts:scu', 'scripts:fabricator']);


// favicon
gulp.task('favicon', function() {
    return gulp.src('./src/favicon.ico')
        .pipe(gulp.dest(rootConfig.dist));
});


// assemble
gulp.task('assemble', function(done) {
    assemble({
        logErrors: config.dev,
    });
    done();
});


// server
gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: '.',
            routes: {
                '/': 'dist',
            },
        },
        logPrefix: 'FABRICATOR',
    });

    /**
     * Because webpackCompiler.watch() isn't being used
     * manually remove the changed file path from the cache
     */
    function webpackCache(e) {
        var keys = Object.keys(webpackConfig.cache);
        var key, matchedKey;
        for (var keyIndex = 0; keyIndex < keys.length; keyIndex++) {
            key = keys[keyIndex];
            if (key.indexOf(e.path) !== -1) {
                matchedKey = key;
                break;
            }
        }
        if (matchedKey) {
            delete webpackConfig.cache[matchedKey];
        }
    }

    gulp.task('assemble:watch', ['assemble'], reload);
    gulp.watch('src/**/*', ['assemble:watch']);

    gulp.task('styles:fabricator:watch', ['styles:fabricator'], reload);
    gulp.watch(rootConfig.sass.fabricator + '**/*.scss', ['styles:fabricator:watch']);

    gulp.task('styles:bootstrap:watch', ['styles:bootstrap'], reload);
    gulp.watch(rootConfig.less + 'bootstrap/**/*.less', ['styles:bootstrap:watch']);

    gulp.task('styles:scu:watch', ['styles:scu'], reload);
    gulp.watch([rootConfig.less + '**/*.less', '!' + rootConfig.assets + 'bootstrap/**/*.less'],
        ['styles:scu:watch']);

    gulp.task('scripts:watch', ['scripts'], reload);
    gulp.watch(rootConfig.js + '**/*.js', ['scripts:watch']).on('change', webpackCache);
});


// default build task
gulp.task('default', ['clean'], function() {
    // define build tasks
    var tasks = [
        'styles',
        'scripts',
        'assemble'
    ];

    // run build
    runSequence(tasks, function(err) {
        if (config.dev) {
            gulp.start('serve');
        }
        if (err) {

        }
    });
});
