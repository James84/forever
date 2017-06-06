const gulp = require('gulp'),
      nodemon = require('gulp-nodemon'),
      gutil = require('gulp-util'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer');

const cssDestination = 'public/css/';
const sassInput = 'public/sass/**/*.scss';

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

gulp.watch(sassInput, ['sass']);

gulp.task('sass', () => {
    gulp.src(sassInput)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(cssDestination));
});

gulp.task('default', ['server']);
