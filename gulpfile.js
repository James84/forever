let gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass');

gulp.task('server', () => {
    var stream = nodemon({
        script: 'app.js'
    });

    stream.on('restart', () => {
        gutil.log('restarting', gutil.colors.magenta());
    }).on('crash', (err) => {
        gutil.log(`error: ${err}`, gutil.colors.red());

    });
});

gulp.watch('public/sass/**/*.scss', ['sass']);

gulp.task('sass', () => {
    gulp.src('public/sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('public/css/'));   
});

gulp.task('default', ['server']);
