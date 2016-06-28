var gulp = require('gulp');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();

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

gulp.task('serve', ['css'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('src/css/*.css', ['css']);
    gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
