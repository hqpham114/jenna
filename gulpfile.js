

const {  series, src, dest, watch} = require('gulp');

//bowser refesh
var browserSync = require('browser-sync').create();

// var ghpages = require('gh-pages');


function html(cb){
    src("src/index.html")
    .pipe(dest("dist"))
    cb();
  }

  function fonts(cb){
    src("src/fonts/*")
    .pipe(dest("dist/fonts"))
    cb();
  }

  function img(cb){
    src("src/img/*")
    .pipe(dest("dist/img"))
    cb();
  }

function js(cb){
    src("src/js/*.js")
    .pipe(dest("dist/js"))
    cb();
  }

  function css(cb){
    src("src/css/*.css")
    .pipe(dest("dist/css"))
    cb();
  }

  


  function watcher(cb){
    watch("src/*.html").on('change', series(html, browserSync.reload));
    watch("src/js/*.js").on('change', series(js, browserSync.reload));
    watch("src/css/*.css").on('change', series(css, browserSync.reload));
    watch("src/fonts/*").on('change', series(fonts, browserSync.reload));
    watch("src/img/*").on('change', series(img, browserSync.reload));

    cb();
  }

  function server(cb){
    browserSync.init({
     server:{
      baseDir: "dist"
     } 
    })
    cb();
  }
  
//   function deploy (cb){
//     ghpages.publish('dist')
//     cb();
//   }

  
  exports.default = series(css,html, img, watcher,server, fonts, js);