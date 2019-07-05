const gulp = require('gulp');
const sass = require('gulp-sass');


gulp.task('sass', function(){
    return gulp.src('assets/sass/mostraPoaSass/*.scss') 
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css/mostraPoaCss'));
});

gulp.task('watch', function () {
    gulp.watch('assets/sass/mostraPoaSass/*.scss', gulp.series(['sass']));
});


gulp.task('default',gulp.series(['sass','watch']));