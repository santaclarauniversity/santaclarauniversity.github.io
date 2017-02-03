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
const bourbon = require('node-bourbon').includePaths;

// ES6
const babel = require('gulp-babel');

// linters
const sassLint = require('gulp-sass-lint');
const eslint = require('gulp-eslint');

// utils
const clone = require('gulp-clone');
const fs = require('fs');


// paths to code that gets copied/linted/etc. in the process of launching toolkit
const configRoot = {
  assets: './assets/',
  bower: './bower_components/',
  css: './css/',
  dist: './dist/',
  src: './src/assets/',
  js: './js/',
  scss: './scss/'
};

const config = {
  dev: gutil.env.dev,
  src: {
    scripts: {
      fabricator: 'fabricator/scripts/fabricator.js',
      toolkit: 'toolkit/scripts/toolkit.js'
    },
    styles: {
      fabricator: 'fabricator/styles/fabricator.scss',
      toolkit: 'toolkit.scss'
    }
  }
};

const webpackConfig = require('./webpack.config.js')(configRoot, config);


// styles (.scss -> .css)
gulp.task('styles:fabricator', () => {
  return gulp.src(configRoot.src + config.src.styles.fabricator)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename('f.css'))
    .pipe(gulp.dest(configRoot.css));
});

gulp.task('styles:bootstrap', () => {
  if (fs.existsSync(configRoot.scss + 'bootstrap/')) {
    return;
  }

  return gulp.src(configRoot.bower + 'bootstrap/scss/**/*')
    .pipe(clone())
    .pipe(gulp.dest(configRoot.scss + 'bootstrap/'));
});

gulp.task('styles:toolkit:lint', () => {
  return gulp.src(configRoot.scss + config.src.styles.toolkit)
    .pipe(sassLint({ configFile: '.sass-lint.yml' }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});

gulp.task('styles:toolkit:compile', () => {
  return gulp.src(configRoot.scss + config.src.styles.toolkit)
    .pipe(sass({
      includePaths: bourbon,
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(configRoot.css));
});

gulp.task('styles:toolkit', (done) => {
  runSequence('styles:toolkit:lint', 'styles:toolkit:compile', done);
});

gulp.task('styles', ['styles:bootstrap', 'styles:fabricator', 'styles:toolkit']);


// scripts (.js, ES6 standard)
// lint toolkit.js first..
gulp.task('scripts:lint', () => {
  return gulp.src(configRoot.src + config.src.scripts.toolkit)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

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

gulp.task('scripts', ['scripts:lint', 'scripts:compile']);


/**
 * Reload the BrowserSync module exactly once, which is executed whenever a web file is updated.
 */
function reload(done) {
  browserSync.reload();
  done();
}

gulp.task('clean', del.bind(null, [configRoot.dist]));

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
        '/': configRoot.dist
      }
    }
  });

  // watch for changes to markup
  gulp.task('assembler:watch', ['assembler'], reload);
  gulp.watch('src/**/*.{html,md,json,yml}', ['assembler:watch']);

  // watch for toolkit .scss changes (EXCLUDE /scss/bootstrap/ - these files should not be changed!)
  gulp.task('styles:toolkit:watch', ['styles:toolkit'], reload);
  gulp.watch([configRoot.scss + '**/*.scss', `!${configRoot.scss}bootstrap/**/*.scss`], ['styles:toolkit:watch']);

  // watch for toolkit .js changes
  gulp.task('scripts:watch', ['scripts:lint', 'scripts:compile'], reload);
  gulp.watch(configRoot.src + config.src.scripts.toolkit, ['scripts:watch']);
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
