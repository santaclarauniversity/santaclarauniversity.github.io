import assembler from 'fabricator-assemble'
import browserSync from 'browser-sync'
import del from 'del'
import minimist from 'minimist'
import webpack from 'webpack'

import gulp from 'gulp'
import access from 'gulp-accessibility'
import autoprefixer from 'gulp-autoprefixer'
import cleanCss from 'gulp-clean-css'
import sass from 'gulp-sass'
import sassLint from 'gulp-sass-lint'
import size from 'gulp-size'
import sourcemaps from 'gulp-sourcemaps'

import { paths } from './paths.config'
import { dev, prod } from './webpack.config'

// dev or prod?
const mode = minimist(process.argv.slice(2), { boolean: ['dev'] });

gulp.task('styles:lint', () => {
  return gulp.src(paths.styles.scu)
    .pipe(sassLint({ configFile: '.sass-lint.yml' }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});
gulp.task('styles:scu', () => {
  return gulp.src(paths.styles.scu)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(cleanCss())
    .pipe(autoprefixer({ browsers: 'last 2 version' }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(paths.dest))
    .pipe(size({
      showFiles: true
    }));
});
gulp.task('styles', gulp.series('styles:lint', 'styles:scu'));

gulp.task('scripts', () => {
  return new Promise(resolve => webpack(mode.dev ? dev : prod, (err, stats) => {
    if (err) {
      console.log('Webpack', err);
    }

    if (mode.dev) {
      console.log('Webpack', stats.toString());
    }

    resolve();
  }));
});

gulp.task('a11y', () => {
  return gulp.src('./dist/**/*')
    .pipe(access({ force: true }))
    .on('error', console.log);
});

export function reload(done) {
  browserSync.reload();

  done();
}
export function assemble(done) {
  assembler({ logErrors: mode.dev });

  done();
}
export function clean(done) {
  del([paths.dest]);

  done();
}
export function serve(done) {
  browserSync.init({
    notify: false,
    logPrefix: 'SCU',
    server: {
      baseDir: '.',
      routes: {
        '/': './dist/'
      }
    }
  });

  done();
}
export function watch(done) {
  gulp.watch('./src/**/*.{html,md,json,yml}', gulp.series(assemble, reload));
  gulp.watch(paths.styles.all, gulp.series('styles', reload));
  gulp.watch(paths.scripts.scu, gulp.series('scripts', reload));

  done();
}

gulp.task('default', gulp.series(clean, gulp.parallel('styles', 'scripts', watch), assemble, serve));
