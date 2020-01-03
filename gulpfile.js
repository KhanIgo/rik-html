var gulp = require('gulp'),
    bs = require('browser-sync').create(),
    sass = require('gulp-sass'),
    notify = require("gulp-notify"),
    plumber = require("gulp-plumber"),
    sourcemaps = require("gulp-sourcemaps"),
    pug = require("gulp-pug"),
    del = require("del"),
    rs = require("run-sequence"),
    concatFilenames = require('gulp-concat-filenames'),
    concat = require('gulp-concat'),
    //    browserify = require('gulp-browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    browserify = require('browserify'),
    babelify = require('babelify');

//var vueify = require('gulp-vueify2');
var vueify = require('gulp-vueify2');

gulp.task('browserify', function () {
//      return browserify('./src/assets/vue/app.js')
//      .bundle()
//      .pipe(source('bundle.js'))
//      .pipe(gulp.dest('./build/assets/js/'));


});

gulp.task('taskVue', function (cb) {
    // set up the browserify instance on a task basis
    var b = browserify({
        entries: './entry.js',
        debug: true,
        // defining transforms here will avoid crashing your stream
        transform: [vueify]
    });

    return b.bundle()
        .pipe(source('./src/assets/vue/app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', log.error)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./build/assets/vue/'));

    cb();
});

gulp.task('server', ['scss_concat', 'scss', 'pug', 'libs_autoimport', 'blocks_js_autoimport', 'browserify', 'copy:js', 'copy:img', 'copy:fonts'], function () {
    bs.init({
        server: {
            baseDir: 'build/'
        }
    });

    gulp.watch('src/pug/**/*.*', ['pug']);
    gulp.watch('src/**/*.scss', ['scss']);
    gulp.watch('src/assets/js/**/*.js', ['copy:js']);
    gulp.watch('src/assets/vue/**/*.js', ['browserify']);
    //    gulp.watch('src/assets/libs/**/*.*', ['copy:libs']);
    gulp.watch('src/assets/libs/**/*.*', ['libs_autoimport']);
    gulp.watch('src/pug/**/*.js', ['blocks_js_autoimport']);
    gulp.watch('src/assets/img/**/*.*', ['copy:img']);
    gulp.watch('src/images/**/*.*', ['copy:img']);
    gulp.watch('src/assets/fonts/**/*.*', ['copy:fonts']);
    gulp.watch('src/assets/js/**/*.js').on('change', bs.reload);
});

gulp.task('scss_concat', function (cb) {
    let concatFilenamesOptions = {
        root: './src/pug/',
        prepend: "@import './../../pug/",
        append: "';"
    }

    gulp.src('./src/pug/**/*.scss')
        .pipe(concatFilenames('_autoimport.scss', concatFilenamesOptions))
        .pipe(gulp.dest('./src/assets/scss'));

    cb();
});

gulp.task('libs_autoimport', function (cb) {
    gulp.src('./src/assets/libs/**/*.js')
    .pipe(concat('libsBundle.js'))
    .pipe(gulp.dest('./build/assets/js/'));
    
    gulp.src('./src/assets/libs/**/*.css')
    .pipe(concat('libsBundle.css'))
    .pipe(gulp.dest('./build/assets/css/'));

    cb();
});


gulp.task('blocks_js_autoimport', function (cb) {
    gulp.src('./src/pug/**/*.js')
    .pipe(concat('blocks.js'))
    .pipe(gulp.dest('./build/assets/js/'));
    
    cb();
});




gulp.task('scss', function () {
    return gulp.src('src/assets/scss/style.scss')
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return {
                    title: 'Styles',
                    message: err.message
                }
            })
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/assets/css'))
        .pipe(bs.stream());
});
gulp.task('pug', function () {
    return gulp.src('src/pug/*.pug')
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return {
                    title: 'Pug',
                    message: err.message
                }
            })
        }))
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('build'))
        .pipe(bs.stream());
});

gulp.task('copy:js', function () {
    return gulp.src('src/assets/js/**/*.*')
        .pipe(gulp.dest('build/assets/js'))
        .pipe(bs.stream());
});
gulp.task('copy:libs', function () {
    return gulp.src('src/assets/libs/**/*.*')
        .pipe(gulp.dest('build/assets/libs'))
        .pipe(bs.stream());
});
gulp.task('copy:img', function () {
    gulp.src('src/assets/img/**/*.*')
        .pipe(gulp.dest('build/assets/img'))
        .pipe(bs.stream());

    gulp.src('src/images/**/*.*')
        .pipe(gulp.dest('build/images'))
        .pipe(bs.stream());
});
gulp.task('copy:fonts', function () {
    return gulp.src('src/assets/fonts/**/*.*')
        .pipe(gulp.dest('build/assets/fonts'))
        .pipe(bs.stream());
});
gulp.task('clean:build', function () {
    return del('build');
});
gulp.task('default', function (callback) {
    rs(
        'clean:build',
        'server',
        callback
    );
});