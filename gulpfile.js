'use strict';

// fabricator modules
const assembler = require('fabricator-assemble');
const browserSync = require('browser-sync');
const csso = require('gulp-csso');
const del = require('del');
const gulp = require('gulp');
const gutil = require('gulp-util');
const gulpif = require('gulp-if');
const imagemin = require('gulp-imagemin');
const prefix = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const reload = browserSync.reload;
const runSequence = require('run-sequence');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack');

// custom modules
const babel = require('gulp-babel');
const clone = require('gulp-clone');
const eslint = require('gulp-eslint');
const less = require('gulp-less');
const lessReporter = require('gulp-csslint-less-reporter');
const lint = require('gulp-csslint');
const nano = require('gulp-cssnano');

// configuration
// Top-level navigation
const rootConfig = {
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
const config = {
  dev: gutil.env.dev,
  src: {
    scripts: {
      fabricator: `${rootConfig.fabricator}scripts/fabricator.js`,
      scu: `${rootConfig.js}scu.js`,
      bower: {
        jquery: `${rootConfig.bower}jquery/dist/jquery.min.js`,
        jqueryUi: `${rootConfig.bower}jquery-ui/jquery-ui.min.js`,
        bootstrap: `${rootConfig.bower}bootstrap/dist/js/bootstrap.min.js`,
        jquerySwipe: `${rootConfig.bower}jquery.event.swipe/js/jquery.event.swipe.js`,
        mediaCheck: `${rootConfig.bower}mediaCheck/js/mediaCheck-min.js`,
        html5shiv: `${rootConfig.bower}html5shiv/dist/html5shiv.min.js`,
        holder: `${rootConfig.bower}holderjs/holder.min.js`,
      },
    },
    styles: {
      fabricator: `${rootConfig.fabricator}styles/fabricator.scss`,
      bootstrap: `${rootConfig.less}bootstrap.less`,
      scu: `${rootConfig.less}scu.less`,
      ieCompatibility: `${rootConfig.less}ie.less`,
      landingPages: {
        startup: `${rootConfig.less}bootstrap/landing-pages/impl/startup.less`,
        minimal: `${rootConfig.less}bootstrap/landing-pages/impl/minimal.less`,
        bold: `${rootConfig.less}'bootstrap/landing-pages/impl/bold.less`,
      },
      bower: {
        jqueryUi: `${rootConfig.bower}smoothness/jquery-ui.min.css`,
      },
    },
    views: [
      'src/views/**/*', '!src/views/+(layouts)/**'
    ],
  },
  // Paths to "output" files that either do not get compiled/have already been compiled
  out: {
    scripts: {
      bower: `${rootConfig.js}bower/`,
      scu: `${rootConfig.js}min/`,
    },
    styles: {
      fabricator: `${rootConfig.css}fabricator/`,
      scu: rootConfig.css,
    },
  },
};


// clean
gulp.task('clean', del.bind(null, [rootConfig.dist]));


// styles
gulp.task('styles:fabricator', () => {
  gulp.src(config.src.styles.fabricator)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix('last 1 version'))
    .pipe(gulpif(!config.dev, csso()))
    .pipe(rename('f.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.out.styles.fabricator))
    .pipe(gulpif(config.dev, reload({stream: true})));
});

/**
 * Attempts to pipe data from a LESS source path into its corresponding destination path.
 *
 * @param src    The source folder of the LESS code (string).
 * @param des    The destination folder of the compiled, minified CSS file (string).
 * @param linter  Whether to run CSSLint on the inputted source code.
 * @return      Gulp pipe of output which is sent to its destination.
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

gulp.task('styles:bootstrap', () => {
  return pipeLess(config.src.styles.bootstrap, config.out.styles.scu, false);
});

gulp.task('styles:ieCompatibility', () => {
  return pipeLess(config.src.styles.ieCompatibility, config.out.styles.scu, true);
});

gulp.task('styles:landingPages', () => {
  for (var include in config.src.styles.landingPages) {
    pipeLess(config.src.styles.landingPages[include], config.out.styles.scu, false);
  }
});

gulp.task('styles:scu', () => {
  return pipeLess(config.src.styles.scu, config.out.styles.scu, true);
});

gulp.task('styles:bower', () => {
  for (var include in config.src.styles.bower) {
    gulp.src(config.src.styles.bower[include])
      .pipe(clone())
      .pipe(gulp.dest(config.out.styles.scu));
  }
});

gulp.task('styles', ['styles:fabricator', 'styles:bootstrap', 'styles:ieCompatibility',
  'styles:landingPages', 'styles:scu', 'styles:bower']);


// scripts
const webpackConfig = require('./webpack.config')(config);

gulp.task('scripts:fabricator', function (done) {
  webpack(webpackConfig, (err, stats) => {
    if (err) {
      gutil.log(gutil.colors.red(err()));
    }
    const result = stats.toJson();
    if (result.errors.length) {
      result.errors.forEach((error) => {
        gutil.log(gutil.colors.red(error));
      });
    }
    done();
  });
});

gulp.task('scripts:scu', () => {
  for (let include in config.src.scripts.bower) {
    gulp.src(config.src.scripts.bower[include])
      .pipe(clone())
      .pipe(gulp.dest(config.out.scripts.bower));
  }

  // Before we write the JS out in scripts:fabricator, we want to validate it all
  return gulp.src(config.src.scripts.scu)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(babel({
      presets: ['babili']
    }))
    .pipe(gulp.dest(config.out.scripts.scu));
});

gulp.task('scripts', ['scripts:scu', 'scripts:fabricator']);


// favicon
gulp.task('favicon', () => {
  return gulp.src('./src/favicon.ico')
    .pipe(gulp.dest(rootConfig.dist));
});


// assembler
gulp.task('assembler', function (done) {
  assembler({
    logErrors: config.dev,
  });
  done();
});


// server
gulp.task('serve', () => {
  browserSync({
    server: {
      baseDir: '.',
      routes: {
        '/': 'dist',
      },
    },
    notify: false,
    logPrefix: 'FABRICATOR',
  });

  gulp.task('assembler:watch', ['assembler'], browserSync.reload);
  gulp.watch('src/**/*.{html,md,json,yml}', ['assembler:watch']);

  gulp.task('styles:fabricator:watch', ['styles:fabricator'], browserSync.reload);
  gulp.watch(`${rootConfig.sass.fabricator}**/*.scss`, ['styles:fabricator:watch']);

  gulp.task('styles:bootstrap:watch', ['styles:bootstrap'], browserSync.reload);
  gulp.watch(`${rootConfig.less}bootstrap/**/*.less`, ['styles:bootstrap:watch']);

  gulp.task('styles:scu:watch', ['styles:scu'], browserSync.reload);
  gulp.watch([`${rootConfig.less}**/*.less`, `!${rootConfig.assets}bootstrap/**/*.less`],
    ['styles:scu:watch']);

  gulp.task('scripts:watch', ['scripts'], browserSync.reload);
  gulp.watch(config.src.scripts.scu, ['scripts:watch']);
});


// default build task
gulp.task('default', ['clean'], () => {
  // define build tasks
  const tasks = [
    'styles',
    'scripts',
    'assembler',
  ];

  // run build
  runSequence(tasks, () => {
    if (config.dev) {
      gulp.start('serve');
    }
  });
});
