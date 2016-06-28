var gulp = require('gulp');
var concat = require('gulp-concat');


gulp.task('css', function() {
  gulp.src([
    'bower_components/skeleton-framework/dist/skeleton.min.css', 
    'bower_components/font-awesome/css/font-awesome.min.css',
    'src/css/main.css'
  ])
  .pipe(concat('styles.css'))
  .pipe(gulp.dest('assets/css'));
});


gulp.task('fonts', function() {
  gulp.src(['bower_components/font-awesome/fonts/*'])
    .pipe(gulp.dest('assets/fonts'))
});



gulp.task('default', function(){
  // run tasks here
  // set up watch handlers here
});
