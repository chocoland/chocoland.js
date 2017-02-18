var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var server = "./views";
var config = './config';
var cache = './cache';
var yaml = require('gulp-yaml');

gulp.task('yaml-server', function () {
    return gulp.src(config + '/server/*.yml')
        .pipe(yaml({ safe: true }))
        .pipe(gulp.dest(cache + '/config'));

});

gulp.task('yaml-client', function () {
    return gulp.src(config + '/client/*.yml')
        .pipe(yaml({ safe: true }))
        .pipe(gulp.dest(server + '/config'));

});

gulp.task('build', function () {
    return browserify({entries: server + '/index.js', extensions: ['.js'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(server));
});

gulp.task('watch', ['build'], function () {
    gulp.watch(server + '/js/*.js', ['build']);
    gulp.watch(server + '/index.js', ['build']);
    gulp.watch(config + '/server/*.yml', ['yaml-server']);
    gulp.watch(config + '/client/*.yml', ['yaml-client']);
});

gulp.task('default', ['watch']);