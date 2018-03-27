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
const size = require('gulp-size');
const webpack = require('webpack');

const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const access = require('gulp-accessibility');

// custom packages
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const sassLint = require('gulp-sass-lint');
const eslint = require('gulp-eslint');
const cleanCss = require('gulp-clean-css');


// paths to code that gets copied/linted/etc. in the process of launching toolkit
const config = {
  dev: gutil.env.dev,
  dest: './dist/',
  styles: {
    dest: './css/',
    fabricator: './src/assets/fabricator/styles/fabricator.scss',
    toolkit: ['./scss/**/*.scss', '!./scss/landing/*.scss'],
    landing: './scss/landing/landing-*.scss',
    bootstrap: './bower_components/bootstrap/scss/'
  },
  scripts: {
    dest: './js/',
    fabricator: './src/assets/fabricator/scripts/fabricator.js',
    toolkit: './src/assets/toolkit/scripts/toolkit.js'
  }
};
const webpackConfig = require('./webpack.config.js')(config);

gulp.task('styles:fabricator', () => {
  return gulp.src(config.styles.fabricator)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename('f.css'))
    .pipe(gulp.dest(config.styles.dest));
});

gulp.task('styles:lint', () => {
  return gulp.src(config.styles.toolkit)
    .pipe(sassLint({ configFile: '.sass-lint.yml' }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});

gulp.task('styles:compile', ['styles:lint'], () => {
  return gulp.src('./scss/toolkit.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(cleanCss())
    .pipe(autoprefixer({ browsers: 'last 2 version' }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(config.styles.dest))
    .pipe(size({
      showFiles: true
    }));
});

gulp.task('styles:landing', () => {
  return gulp.src(config.styles.landing)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({ suffix: '.min' }))
    .pipe(autoprefixer({ browsers: 'last 2 version' }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(config.styles.dest))
    .pipe(size({
      showFiles: true
    }));
});

gulp.task('styles', ['styles:fabricator', 'styles:compile']);


gulp.task('scripts:fabricator', (done) => {
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

// gulp.task('scripts:lint', () => {
//   return gulp.src(config.scripts.toolkit)
//     .pipe(eslint())
//     .pipe(eslint.format());
// });

gulp.task('scripts:compile', () => {
  return gulp.src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/holderjs/holder.min.js',
    'node_modules/select2/dist/js/selectWoo.min.js',
    'node_modules/popper.js/dist/umd/popper.js',
    config.scripts.toolkit,
    'node_modules/bootstrap/js/dist/util.js',
    'node_modules/bootstrap/js/dist/dropdown.js',
    'node_modules/bootstrap/js/dist/carousel.js',
    'node_modules/bootstrap/js/dist/collapse.js',
  ])
    .pipe(sourcemaps.init())
    .pipe(concat('compiled-bundle.js'))
    .pipe(gulp.dest("js"))
    .pipe(rename('compiled-bundle.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('js'));
});

gulp.task('scripts', ['scripts:fabricator', 'scripts:compile']);


/**
 * Reload the BrowserSync module exactly once, which is executed whenever a web file is updated.
 */
function reload(done) {
  browserSync.reload();
  done();
}

gulp.task('clean', del.bind(null, [config.dest, config.styles.dest, config.scripts.dest]));

gulp.task('assembler', (done) => {
  assembler({
    logErrors: config.dev
  });
  done();
});

gulp.task('a11y', function() {
  return gulp.src('./dist/**/*.html')
    .pipe(access({
      force: true
    }))
    .on('error', console.log)
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

  // watch for toolkit .scss changes
  gulp.task('styles:watch', ['styles:compile'], reload);
  gulp.watch('./scss/**/*.scss', ['styles:watch']);

  // watch for toolkit .js changes
  gulp.task('scripts:watch', ['scripts:compile'], reload);
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
