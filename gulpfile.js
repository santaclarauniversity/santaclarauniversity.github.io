'use strict';

// fabricator packages
const assembler = require('fabricator-assemble');
const browserSync = require('browser-sync').create();
const del = require('del');
const gulp = require('gulp');
const gutil = require('gulp-util');
const rename = require('gulp-rename');
const runSequence = require('run-sequence');
const sass = require('gulp-sass');
const webpack = require('webpack');

// custom packages
// CSS
const autoprefixer = require('gulp-autoprefixer');


// linters
const sassLint = require('gulp-sass-lint');
const eslint = require('gulp-eslint');

// utils
const clone = require('gulp-clone');
const fs = require('fs');


// paths to code that gets copied/linted/etc. in the process of launching toolkit
const config = {
  dev: gutil.env.dev,
  dest: './dist/',
  styles: {
    dest: './css/',
    fabricator: './src/assets/fabricator/styles/fabricator.scss',
    toolkit: './scss/toolkit.scss',
    bootstrap: './bower_components/bootstrap/scss/'
  },
  scripts: {
    dest: './js/',
    fabricator: './src/assets/fabricator/scripts/fabricator.js',
    toolkit: './src/assets/toolkit/scripts/toolkit.js'
  }
};

const webpackConfig = require('./webpack.config.js')(config);


// styles (.scss -> .css)
gulp.task('styles:fabricator', () => {
  return gulp.src(config.styles.fabricator)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename('f.css'))
    .pipe(gulp.dest(config.styles.dest));
});

gulp.task('styles:toolkit:lint', () => {
  return gulp.src(config.styles.toolkit)
    .pipe(sassLint({ configFile: '.sass-lint.yml' }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});

gulp.task('styles:toolkit:compile', () => {
  return gulp.src(config.styles.toolkit)
    .pipe(sass({ outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({ suffix: '.min' }))
    .pipe(autoprefixer({ browsers: 'last 2 version' }))
    .pipe(gulp.dest(config.styles.dest));
});

gulp.task('styles:toolkit', (done) => {
  runSequence('styles:toolkit:lint', 'styles:toolkit:compile', done);
});

gulp.task('styles', ['styles:fabricator', 'styles:toolkit']);


// ..then compile all scripts to one (via webpack)
gulp.task('scripts:compile', (done) => {
  webpack(webpackConfig, (err, stats) => {
    if (err) {
      gutil.log(gutil.colors.red(err()));
    }

    const results = stats.toJson();

    if (results.errors.length) {
      results.errors.forEach((error) => {
        gutil.log(gutil.colors.red(error));
      })
    }

    done();
  });
});
gulp.task('scripts:lint', (done) => {
  gulp.src(config.scripts.dest)
    .pipe(eslint.failAfterError());
  done();
});

gulp.task('scripts', ['scripts:lint', 'scripts:compile']);


/**
 * Reload the BrowserSync module exactly once, which is executed whenever a web file is updated.
 */
function reload(done) {
  browserSync.reload();
  done();
}

gulp.task('clean', del.bind(null, [config.dest]));

gulp.task('assembler', (done) => {
  assembler({
    logErrors: config.dev
  });
  done();
});

// start BrowserSync and begin watching files
gulp.task('serve', () => {
  browserSync.init({
    notify: false,
    logPrefix: 'Toolkit',
    // we do the 'server' configs here to allow ourselves to reference /js/, /css/ from /src/views/
    server: {
      baseDir: '.',
      routes: {
        '/': config.dest
      }
    }
  });

  // watch for changes to markup
  gulp.task('assembler:watch', ['assembler'], reload);
  gulp.watch('./src/**/*.{html,md,json,yml}', ['assembler:watch']);

  // watch for toolkit .scss changes (EXCLUDE /scss/bootstrap/ - these files should not be changed!)
  gulp.task('styles:toolkit:watch', ['styles:toolkit'], reload);
  gulp.watch('./scss/**/*.scss', ['styles:toolkit:watch']);

  // watch for toolkit .js changes
  gulp.task('scripts:watch', ['scripts:lint', 'scripts:compile'], reload);
  gulp.watch(config.scripts.toolkit, ['scripts:watch']);
});

// this is the task gulp actually runs from `gulp` command
gulp.task('default', ['clean'], () => {
  const tasks = [
    'styles',
    'scripts',
    'assembler'
  ];

  runSequence(tasks, () => {
    if (config.dev) {
      gulp.start('serve');
    }
  });
});
