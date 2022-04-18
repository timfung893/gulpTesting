const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();

// compile sass
function style() {
  return (
    gulp
      .src("./scss/style.scss")
      .pipe(sass())
      .on("error", sass.logError)
      .pipe(gulp.dest("./css"))
      //   stream changes to browser
      .pipe(browserSync.stream())
  );
}

// init sync and watch for changes
function watch() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });

  //   watch for changes in sass & html and reload
  gulp.watch("./scss/*.scss", style);
  gulp.watch("./*.html").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;
