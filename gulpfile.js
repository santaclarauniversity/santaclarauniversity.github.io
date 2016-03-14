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
var rename 			= require('gulp-rename');
var merge			= require('merge-stream');

// configuration
var config = {
	dev: gutil.env.dev,
	src: {
		scripts: {
			fabricator: './src/assets/fabricator/scripts/fabricator.js',
			toolkit: './src/assets/toolkit/scripts/toolkit.js',
			bower: {
				jquery: './bower_components/jquery/dist/jquery.min.js',
				bootstrap: './bower_components/bootstrap/dist/js/bootstrap.min.js',
				jquerySwipe: './bower_components/jquery.event.swipe/js/jquery.event.swipe.js',
				jRespond: './bower_components/jrespond/js/jRespond.min.js',
				mediaCheck: './bower_components/mediaCheck/js/mediaCheck-min.js',
				html5shiv: './bower_components/html5shiv/dist/html5shiv.min.js'
			}
		},
		styles: {
			fabricator: './src/assets/fabricator/styles/fabricator.scss',
			bootstrap: './src/assets/toolkit/styles/bootstrap.less',
			toolkit: './src/assets/toolkit/styles/toolkit.less',
			ieCompatibility: './src/assets/toolkit/styles/ie.less'
		},
		images: './src/assets/toolkit/images/**/*',
		views: ['src/views/**/*', '!src/views/+(layouts)/**']
	},
	fonts: './fonts/**/*',
	dest: './dist/'
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
		.pipe(gulp.dest(config.dest + '/assets/fabricator/styles'))
		.pipe(gulpif(config.dev, reload({
			stream: true
		})));
});

gulp.task('styles:bootstrap', function() {
	var css = gulp.src(config.src.styles.bootstrap)
		.pipe(sourcemaps.init())
		.pipe(less());

	var min = css.pipe(clone())
		.pipe(nano())
		.pipe(rename('bootstrap.min.css'));

	return merge(css, min)
		.pipe(gulp.dest(config.dest + '/assets/toolkit/styles'));
});

gulp.task('styles:ieCompatibility', function() {
	var css = gulp.src(config.src.styles.ieCompatibility)
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(lint())
		.pipe(lessReporter(config.src.styles.ieCompatibility));

	var min = css.pipe(clone())
		.pipe(nano())
		.pipe(rename('ie.min.css'));

	return merge(css, min)
		.pipe(gulp.dest(config.dest + '/assets/toolkit/styles'));
})

gulp.task('styles:toolkit', function() {
	var css = gulp.src(config.src.styles.toolkit)
		.pipe(sourcemaps.init())
		// Compile LESS to CSS
		.pipe(less())
		// Check compiled code for errors/warnings; fail task if there are any
		.pipe(lint())
		.pipe(lessReporter(config.src.styles.toolkit));

	// Compress ("minify") CSS if linter succeeded
	var min = css.pipe(clone())
		.pipe(nano())
		.pipe(rename('toolkit.min.css'));

	return merge(css, min)
		.pipe(gulp.dest(config.dest + '/assets/toolkit/styles'));
});

gulp.task('styles', ['styles:fabricator', 'styles:bootstrap', 'styles:ieCompatibility', 'styles:toolkit']);


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
			.pipe(gulp.dest(config.dest + '/assets/toolkit/scripts'));
	}

	return gulp.src(config.src.scripts.toolkit)
		// Check JS for errors/warnings; fail task if there are any
		.pipe(jshint())
		.pipe(jshint.reporter())
		.pipe(jshint.reporter('fail'))
		// Check JS for style consistency; fail task if there are any errors
		.pipe(jscs())
		.pipe(jscs.reporter())
		.pipe(jscs.reporter('fail'))
		// Minify/compress JS
		.pipe(minify({
			ext: {
				min: '.min.js'
			}
		}))
		.pipe(gulp.dest(config.dest + '/assets/toolkit/scripts'));
});

gulp.task('scripts', ['scripts:fabricator', 'scripts:toolkit']);


gulp.task('fonts', function() {
	return gulp.src(config.fonts)
		.pipe(gulp.dest(config.dest + '/assets/toolkit/fonts'));
});


// images
gulp.task('images', ['favicon'], function() {
	return gulp.src(config.src.images)
		.pipe(imagemin())
		.pipe(gulp.dest(config.dest + '/assets/toolkit/images'));
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
		notify: false,
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
	gulp.watch('src/**/*.{html,md,json,yml}', ['assemble:watch']);

	gulp.task('styles:fabricator:watch', ['styles:fabricator']);
	gulp.watch('src/assets/fabricator/styles/**/*.scss', ['styles:fabricator:watch']);

	gulp.task('styles:toolkit:watch', ['styles:toolkit']);
	gulp.watch('src/assets/toolkit/styles/**/*.less', ['styles:toolkit:watch']);

	gulp.task('scripts:watch', ['scripts'], reload);
	gulp.watch('src/assets/{fabricator,toolkit}/scripts/**/*.js', ['scripts:watch']).on('change', webpackCache);

	gulp.task('images:watch', ['images'], reload);
	gulp.watch(config.src.images, ['images:watch']);

});


// default build task
gulp.task('default', ['clean'], function() {

	// define build tasks
	var tasks = [
		'styles',
		'scripts',
		'images',
		'fonts',
		'assemble',
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
