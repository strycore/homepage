const gulp = require('gulp');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const nunjucks = require('gulp-nunjucks');
const modRewrite  = require('connect-modrewrite');

gulp.task('css', function() {
  gulp.src([
    'bower_components/skeleton-framework/dist/skeleton.min.css',
    'bower_components/font-awesome/css/font-awesome.min.css',
    'src/css/main.css'
  ])
  .pipe(concat('styles.css'))
  .pipe(gulp.dest('assets/css'))
  .pipe(browserSync.stream());
});


gulp.task('fonts', function() {
  gulp.src(['bower_components/font-awesome/fonts/*'])
    .pipe(gulp.dest('assets/fonts'))
});

gulp.task('html', function () {
  gulp.src(['src/templates/*.html'])
    .pipe(nunjucks.compile())
    .pipe(gulp.dest('dist'));
});

gulp.task('serve', ['html', 'css'], function() {
    browserSync.init({
        server: {
            baseDir: "./dist",
            middleware: [
                modRewrite([
                    '^.([^\\.]+)$ /$1.html [L]'
                ])
            ]
        }
    });
    gulp.watch('src/css/*.css', ['css']);
    gulp.watch('src/templates/*.html', ['html']);
    gulp.watch('dist/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
