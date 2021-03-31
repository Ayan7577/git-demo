var gulp = require("gulp");

var folder = {
    src: "src/",
    dist: "dist/"
}
//gulp 插件的应用  下载插件 ---> 应用插件

//$ export NODE_ENV=development  在控制端使用，改变当前环境变量
//  开发：development 生产：production

//判断获得环境变量
var devMod = process.env.NODE_ENV == "development";
console.log(devMod);
//压缩html
var htmlClean = require("gulp-htmlclean");

//压缩图片
var imageMin = require("gulp-imageMin");

//压缩js
var uglify = require("gulp-uglify");

//去掉js中的调试语句
var debug = require("gulp-strip-debug")

//将less转换为css
var less = require("gulp-less");

//压缩css
var cleanCss = require("gulp-clean-css")

//gulp-postcss autoprefixer  
var postCss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");

//开启服务器

var connect = require("gulp-connect");



gulp.task("html", function () {
    var page = gulp.src(folder.src + "html/*")
        .pipe(connect.reload())
        if(!devMod){
            page.pipe(htmlClean())

        }
        page.pipe(gulp.dest(folder.dist + "html/"))
})

gulp.task("image", function () {
    gulp.src(folder.src + "images/*")
        .pipe(imageMin())
        .pipe(gulp.dest(folder.dist + "images/"))
})
// 歌曲专辑图片
gulp.task("image", function () {
    gulp.src("source/*")
        .pipe(imageMin())
        .pipe(gulp.dest(folder.dist + "source/"))
})

gulp.task("css", function () {
    var page = gulp.src(folder.src + "css/*")
        .pipe(connect.reload())
        .pipe(less())
        .pipe(postCss([autoprefixer()]))
        if(!devMod){
            page.pipe(cleanCss())

        }
        page.pipe(gulp.dest(folder.dist + "css/"))
})

gulp.task("js", function () {
    var page = gulp.src(folder.src + "js/*")
        .pipe(connect.reload())
        if(!devMod){
            page .pipe(debug())
            .pipe(uglify())
        }
        
        page .pipe(gulp.dest(folder.dist + "js/"))
})

gulp.task("server", function () {
    connect.server({
        port: "8888",
        livereload: true
    })
})

gulp.task("watch", function () {
    gulp.watch(folder.src + "html/*", ["html"]);
    gulp.watch(folder.src + "css/*", ["css"]);
    gulp.watch(folder.src + "js/*", ["js"]);
})

gulp.task("default", ["html", "css", "js", "image", "server", "watch"])


// less --> 自动添加css3前缀 --> 压缩 --> css文件

//gulp.src()
//gulp.dest()
//gulp.task()
//gulp.watch()