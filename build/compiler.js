const gulp = require('gulp');
const path = require('path');
const less = require('gulp-less');
const insert = require('gulp-insert');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const src = path.resolve(__dirname, '../packages');

const libDir = path.resolve(__dirname, '../lib');
const exampleDir = path.resolve(__dirname, '../example/dist');

const baseCssPath = path.resolve(__dirname, '../packages/common/index.wxss');

const lessCompiler = (dist) =>
  function compileLess() {
    return gulp
      .src(`${src}/**/*.less`)
      .pipe(less())
      .pipe(postcss())
      .pipe(
        insert.transform((contents, file) => {
          if (!file.path.includes('packages' + path.sep + 'common')) {
            const relativePath = path
              .relative(
                path.normalize(`${file.path}${path.sep}..`),
                baseCssPath
              )
              .replace(/\\/g, '/');
            contents = `@import '${relativePath}';${contents}`;
          }
          return contents;
        })
      )
      .pipe(rename({ extname: '.wxss' }))
      .pipe(gulp.dest(dist));
  };

const copier = (dist, ext) =>
  function copy() {
    return gulp.src(`${src}/**/*.${ext}`).pipe(gulp.dest(dist));
  };

const staticCopier = (dist) =>
  gulp.parallel(
    copier(dist, 'wxml'),
    copier(dist, 'wxs'),
    copier(dist, 'json'),
    copier(dist, 'js')
  );

const cleaner = (path) =>
  function clean() {
    return exec(`npx rimraf ${path}`);
  };

const tasks = [
  ['buildLib', libDir]
].reduce((prev, [name, ...args]) => {
  prev[name] = gulp.series(
    cleaner(...args),
    gulp.parallel(
      lessCompiler(...args),
      staticCopier(...args)
    )
  );
  return prev;
}, {});

tasks.buildExample = gulp.series(
  cleaner(exampleDir),
  gulp.parallel(
    lessCompiler(exampleDir),
    staticCopier(exampleDir),
    () => {
      gulp.watch(`${src}/**/*.less`, lessCompiler(exampleDir));
      gulp.watch(`${src}/**/*.wxml`, copier(exampleDir, 'wxml'));
      gulp.watch(`${src}/**/*.wxs`, copier(exampleDir, 'wxs'));
      gulp.watch(`${src}/**/*.json`, copier(exampleDir, 'json'));
      gulp.watch(`${src}/**/*.js`, copier(exampleDir, 'js'));
    }
  )
);

module.exports = tasks;
