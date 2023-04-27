const gulp       = require("gulp"),
      webdriver  = require("gulp-webdriver");

gulp.task('test:ios', function(done) {
    return gulp.src('./test/config/ios.appium.conf.js').pipe(webdriver({
        logLevel: 'debug',
        waitforTimeout: 60000
    })).once('error', function () {
        console.log("Task has an error occurred")
        done();
        process.exit(1);
    }).once('end', function () {
        console.log("Task is completed")
        done();
        process.exit();
    });
});

gulp.task('test:android', function(done) {
    return gulp.src('./test/config/android.appium.conf.js').pipe(webdriver({
        logLevel: 'debug',
        waitforTimeout: 60000
    })).once('error', function () {
        console.log("Task has an error occurred")
        done();
        process.exit(1);
    }).once('end', function () {
        console.log("Task is completed")
        done();
        process.exit();
    });
});

gulp.task('get:allure-report-ios', function(callback) {
    //TODO
});
gulp.task('get:allure-report-android', function(callback) {
    //TODO
});

module.exports = gulp;
