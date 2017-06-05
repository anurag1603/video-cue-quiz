
/*  gulp connects the project with browser and  provides a server to it 
 * gulp index adds any files to the project , all files can be added 
 * 
 * @type {Module gulp|Module gulp}
 */



var gulp = require('gulp');
var inject = require('gulp-inject');
var newer = require('gulp-newer');
var connect = require('gulp-connect'),
        mainBowerFiles = require('main-bower-files'),
        es = require('event-stream'),
        path = require('path');


/*Contains a list of the globs where the app files are kept
 * 
 * @type {Array}
 */
var allSources = ['app/css/*.css',
    'app/js/*.js',
    'app/js/*/*.js',
    'app/views/*.html',
    'app/*.html'];
/*
 * index task adds all files in the index.html page,
 * 
 */
gulp.task('index', function () {
    var sources = ['mainBowerFiles()', 'app/js/*/*.js', 'app/css/*.css'];
console.log(mainBowerFiles());
    return gulp.src('app/index.html')
            .pipe(inject(gulp.src(mainBowerFiles(), {read: false}), {name: 'bower'}))
            .pipe(inject(gulp.src(allSources, {read: false})))
            .pipe(gulp.dest('app'));
});
/*
 * add a local web server , with liverelaod
 */
gulp.task('connect', function () {
    connect.server({
//      root: '/Users/anurag/NetBeansProjects/shoppingcart',
        root: __dirname,
        livereload: true
    });
});

/*
 * reloads the app
 */
gulp.task('html', function () {
    return gulp.src(allSources)
            .pipe(connect.reload());
});

gulp.task('inject', function () {
//    return gulp.src('app/index.html')
//      .pipe(newer(allSources))
//      .pipe(gulp.dest('app'));
    gulp.src('app/index.html')
            .pipe(inject(gulp.src(allSources, {read: false})))
            .pipe(gulp.dest('app'));
});

gulp.task('watch', function () {
    return gulp.watch(allSources, ['inject', 'html']);
});

gulp.task('default', ['connect', 'watch']);
