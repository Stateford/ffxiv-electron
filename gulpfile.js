// gulpfile.js
/*jslint node:true, esversion: 6 */
"use strict";

const gulp = require('gulp'),
      run = require('gulp-run'),
      livereload = require('gulp-livereload');

gulp.task('copy-html', function() {
    gulp.src('src/**/*.html')
    // Perform minification taks, etc here
    .pipe(gulp.dest('dist/'))
    .pipe(livereload());
});

gulp.task('run', function() {
    return run('../dep/electron dist/ ').exec();
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('src/**/*.html',['copy-html']);
});

gulp.task('default', ['watch', 'run']);
