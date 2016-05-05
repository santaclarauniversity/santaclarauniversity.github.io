'use strict';

// modules
var assemble 	= require('fabricator-assemble');
var browserSync = require('browser-sync');
var csso 		= require('gulp-csso');
var del 		= require('del');
var gulp 		= require('gulp');
var gutil 		= require('gulp-util');
var gulpif 		= require('gulp-if');
var imagemin 	= require('gulp-imagemin');
var prefix 		= require('gulp-autoprefixer');
var rename 		= require('gulp-rename');
var reload 		= browserSync.reload;
var runSequence = require('run-sequence');
var sass 		= require('gulp-sass');
var sourcemaps 	= require('gulp-sourcemaps');
var webpack 	= require('webpack');

// custom modules
var less 			= require('gulp-less');
var lint 			= require('gulp-csslint');
var nano 			= require('gulp-cssnano');
var lessReporter 	= require('gulp-csslint-less-reporter');
var jshint  		= require('gulp-jshint');
var jscs    		= require('gulp-jscs');
var minify  		= require('gulp-minify');
var clone 			= require('gulp-clone');
var merge			= require('merge-stream');
var newer			= require('gulp-newer');
//var watch			= require('gulp-watch');

// configuration
var preConfig = {
	bower: './bower_components',
	assets: './src/assets'
};

var config = {
	dev: gutil.env.dev,
	src: {
		scripts: {
			fabricator: 		preConfig.assets + '/fabricator/scripts/fabricator.js',
			toolkit: 			preConfig.assets + '/toolkit/scripts/toolkit.js',
			bower: {
				jquery: 		preConfig.bower + '/jquery/dist/jquery.min.js',
				jqueryUi: 		preConfig.bower + '/jquery-ui/jquery-ui.min.js',
				bootstrap: 		preConfig.bower + '/bootstrap/dist/js/bootstrap.min.js',
				jquerySwipe: 	preConfig.bower + '/jquery.event.swipe/js/jquery.event.swipe.js',
				jRespond: 		preConfig.bower + '/jrespond/js/jRespond.min.js',
				mediaCheck: 	preConfig.bower + '/mediaCheck/js/mediaCheck-min.js',
				html5shiv: 		preConfig.bower + '/html5shiv/dist/html5shiv.min.js'
			}
		},
		styles: {
			fabricator: 		preConfig.assets + '/fabricator/styles/fabricator.scss',
			bootstrap: 			preConfig.assets + '/toolkit/styles/bootstrap.less',
			toolkit: 			preConfig.assets + '/toolkit/styles/toolkit.less',
			ieCompatibility: 	preConfig.assets + '/toolkit/styles/ie.less',
			landingPages:		preConfig.assets + '/toolkit/styles/bootstrap/landing-pages/impl/startup.less',
			bower: {
				fontAwesome: 	preConfig.bower + '/font-awesome/css/font-awesome.min.css',
				jqueryUi: 		preConfig.bower + '/smoothness/jquery-ui.min.css'
			}
		},
		views: ['src/views/**/*', '!src/views/+(layouts)/**']
	},
	dest: './dist/',
	/*
		We use root directories for assets to expedite the build process for the many
		large, generally unchanged assets.
	 */
	cssDest: './css/',
	fontsDest: './assets/fonts/',
	jsDest: './js/',
	imagesDest: './assets/images/'
};


// webpack
var webpackConfig 	= require('./webpack.config')(config);
var webpackCompiler = webpack(webpackConfig);


// clean
gulp.task('clean', function(cb) {
	del([config.dest], cb);
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
		.pipe(gulp.dest(config.dest + 'assets/fabricator/styles'))
		.pipe(gulpif(config.dev, reload({
			stream: true
		})));
});

gulp.task('styles:bootstrap', function() {
	var css = gulp.src(config.src.styles.bootstrap)
		.pipe(sourcemaps.init())
		.pipe(less());

	var min = css
		.pipe(clone())
		.pipe(nano())
		.pipe(rename('bootstrap.min.css'))
		.pipe(gulp.dest(config.cssDest + 'min/'))
		.pipe(clone())
		.pipe(gulp.dest(config.dest + 'assets/toolkit/styles'));

	return css.pipe(gulp.dest(config.cssDest));
});

gulp.task('styles:ieCompatibility', function() {
	var css = gulp.src(config.src.styles.ieCompatibility)
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(lint())
		.pipe(lessReporter(config.src.styles.ieCompatibility));

	var min = css
		.pipe(clone())
		.pipe(nano())
		.pipe(rename('ie.min.css'))
		.pipe(gulp.dest(config.cssDest + 'min/'))
		.pipe(clone())
		.pipe(gulp.dest(config.dest + 'assets/toolkit/styles'));

	return css.pipe(gulp.dest(config.cssDest));
});

gulp.task('styles:landingPages', function() {
	var css = gulp.src(config.src.styles.landingPages)
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(lint())
		.pipe(lessReporter(config.src.styles.landingPages));

	var min = css
		.pipe(clone())
		.pipe(nano())
		.pipe(rename('landing.min.css'))
		.pipe(gulp.dest(config.cssDest + 'min/'))
		.pipe(clone())
		.pipe(gulp.dest(config.dest + 'assets/toolkit/styles'));

	return css.pipe(gulp.dest(config.cssDest));
});

gulp.task('styles:toolkit', function() {
	for (var include in config.src.styles.bower) {
		gulp.src(config.src.styles.bower[include])
			.pipe(clone())
			.pipe(gulp.dest(config.dest + 'assets/toolkit/styles'));
	}

	var css = gulp.src(config.src.styles.toolkit)
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(lint())
		.pipe(lessReporter(config.src.styles.toolkit));

	var min = css
		.pipe(clone())
		.pipe(nano())
		.pipe(rename('toolkit.min.css'))
		.pipe(gulp.dest(config.cssDest + 'min/'))
		.pipe(clone())
		.pipe(gulp.dest(config.dest + 'assets/toolkit/styles'));

	return css.pipe(gulp.dest(config.cssDest));
});

gulp.task('styles', ['styles:fabricator', 'styles:bootstrap', 'styles:ieCompatibility', 'styles:landingPages',
	'styles:toolkit']);


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

gulp.task('scripts:toolkit', function() {
	// First, include statics from Bower.  Not sure if this is the best way to do this yet, but it works.
	for (var include in config.src.scripts.bower) {
		gulp.src(config.src.scripts.bower[include])
			.pipe(clone())
			.pipe(gulp.dest(config.dest + 'assets/toolkit/scripts'));
	}

	return gulp.src(config.src.scripts.toolkit)
		.pipe(jshint())
		.pipe(jshint.reporter())
		.pipe(jshint.reporter('fail'))
		.pipe(jscs())
		.pipe(jscs.reporter())
		.pipe(jscs.reporter('fail'))
		.pipe(minify({
			ext: {
				min: '.min.js'
			}
		}))
		.pipe(gulp.dest(config.jsDest))
		.pipe(clone())
		.pipe(gulp.dest(config.dest + 'assets/toolkit/scripts'));
});

gulp.task('scripts', ['scripts:fabricator', 'scripts:toolkit']);


gulp.task('fonts', function() {
	return gulp.src(config.fontsDest + '**/*')
		.pipe(gulp.dest(config.dest + 'assets/toolkit/fonts'));
});


// images
gulp.task('images', ['favicon'], function() {
	gulp.src(config.imagesDest + '**/*')
		.pipe(newer(config.imagesDest))
		.pipe(imagemin())
		.pipe(gulp.dest(config.imagesDest));
	// For some reason the above line can't just pipe into the below line.  Not sure why.
	gulp.src(config.imagesDest + '**/*')
		.pipe(clone())
		.pipe(gulp.dest(config.dest + 'assets/toolkit/images'));
});

gulp.task('favicon', function() {
	return gulp.src('./src/favicon.ico')
		.pipe(gulp.dest(config.dest));
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
			baseDir: config.dest
		},
		logPrefix: 'FABRICATOR'
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

	gulp.task('styles:fabricator:watch', ['styles:fabricator']);
	gulp.watch(preConfig.assets + '/fabricator/styles/**/*.scss', ['styles:fabricator:watch']);

	gulp.task('styles:bootstrap:watch', ['styles:toolkit']);
	gulp.watch(preConfig.assets + '/toolkit/styles/bootstrap/**/*.less', ['styles:toolkit:watch']);

	gulp.task('styles:toolkit:watch', ['styles:toolkit']);
	gulp.watch([preConfig.assets + '/toolkit/styles/**/*.less',
		'!' + preConfig.assets + '/toolkit/styles/bootstrap/**/*.less'], ['styles:toolkit:watch']);

	gulp.task('scripts:watch', ['scripts'], reload);
	gulp.watch(preConfig.assets + '/{fabricator,toolkit}/scripts/**/*.js', ['scripts:watch']).on('change', webpackCache);

	gulp.task('images:watch', ['images'], reload);
	gulp.watch(config.imagesDest + '**/*.{png,gif,jpg,jpeg}', ['images:watch']);

	gulp.task('fonts:watch', ['fonts'], reload);
	gulp.watch(config.fontsDest + '**/*.{eot,svg,woff,woff2,ttf}', ['fonts:watch']);
});


// default build task
gulp.task('default', ['clean'], function() {
	// define build tasks
	var tasks = [
		'styles',
		'scripts',
		'images',
		'fonts',
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
