// https://www.youtube.com/watch?v=stFOy0Noahg&t=1630s

let project_folder = "dist";
let source_folder = "src";

// переменная пути к файлам проекта
let path = {
    build: {
        // index_html: [project_folder + "/*.html", "!" + source_folder + "/index.html"],
        index_html: project_folder + "/",
        html: project_folder + "/html/",
        css: project_folder + "/css/",
        js: project_folder + "/js/",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/",
    },
    src: {
        index_html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"],
        html: [source_folder + "/html/*.html", source_folder + "/_*.html"],
        css: [source_folder + "/scss/*.scss", source_folder + "/scss/*.css"],
        js: source_folder + "/js/*.js",
        // img: source_folder + "/img/*.{jpg,png,webp,ico,gif,svg}",
        img: [source_folder + "/img/*.{jpg,jpeg,png,webp,ico,gif,svg}", source_folder + "/logo/*.{jpg,jpeg,png,webp,ico,gif,svg}"],
        fonts: source_folder + "/fonts/*.ttf",
    },
    watch: {
        html: source_folder + "/**/*.html",
        css: source_folder + "/scss/**/*.scss",
        js: source_folder + "/js/**/*.js",
        img: source_folder + "/img/**/*.{jpg,png,webp,ico,gif,svg}",
    },
    clean: "./" + project_folder + "/"
}


//
//
// подключение переменных
let { src, dest } = require('gulp'), 
    gulp = require('gulp'),
    browsersync = require("browser-sync").create(),
    // fileinclude подключает различные части html (шапка, футер и т.д. к основному .html файлу)
    // пишем в index.html  
    // @@include('_fileName.html')
    // называй файл с подчеркивания!!! _header.html
    fileinclude = require('gulp-file-include'),
    del = require('del'),
    scss = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    group_media = require('gulp-group-css-media-queries'),
    clean_css = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify-es').default,
    imagemin = require('gulp-imagemin'),
    webp = require('gulp-webp'),
    webphtml = require('gulp-webp-html'),
    webpcss = require('gulp-webpcss'),
    ttf2woff = require('gulp-ttf2woff'),
    ttf2woff2 = require('gulp-ttf2woff2');
//
//
//


function browserSync() {
    browsersync.init({
        server: {
            baseDir: "./" + project_folder + "/",
            injectChanges: true // this is new
        },
        port: 3000,
        notify: false
    });
}

function index_html() {
    return src(path.src.index_html)
    .pipe(fileinclude()) 
    .pipe(webphtml())
    .pipe(dest(path.build.index_html))
    .pipe(browsersync.stream())
}

function html() {
    return src(path.src.html)
    .pipe(fileinclude()) 
    .pipe(webphtml())
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}

function css() {
    return src(path.src.css)
    .pipe(
        scss({
            outputStyle: "expanded"
        })
    ) 
    .pipe(group_media())
    .pipe(
        autoprefixer({
            overrideBrowserslist: ["last 10 versions"],
            cascade:true
        })
    )
    .pipe(clean_css())
    .pipe(
        webpcss({
            webpClass: '.webp', noWebpClass: '.no-webp'
        })
    )
    .pipe(dest(path.build.css))
    .pipe(
        rename({
            extname: ".min.css"
        })
    )
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream())
}

function js() {
    return src(path.src.js)
    // .pipe(fileinclude()) 
    .pipe(dest(path.build.js))
    .pipe(uglify())
    .pipe(
        rename({
            extname: ".min.js"
        })
    )
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream())
}

function images() {
    return src(path.src.img)
    .pipe(
        webp({
            // from 0 to 100
            quality: 70 
        })
    )
    .pipe(dest(path.build.img))
    .pipe(src(path.src.img))
    .pipe(
        imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlated: true,
            // 0 to 7 (как сильно хотим сжать изображение)
            optimizationLevel: 3 
        })
    ) 
    .pipe(dest(path.build.img))
    .pipe(browsersync.stream())
}

function fonts(){
    return src(path.src.fonts)
    .pipe(ttf2woff())
    .pipe(dest(path.build.fonts))
    .pipe(src(path.src.fonts))
    .pipe(ttf2woff2())
    .pipe(dest(path.build.fonts))
}


function watchfiles() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], images);
}

function clean(){
    return del(path.clean)
}

let build = gulp.series(clean, gulp.parallel(index_html, html, css, js, images, fonts));
let watch = gulp.parallel(build, watchfiles, browserSync);

exports.index_html = index_html;
exports.html = html;
exports.css = css;
exports.js = js;
exports.images = images;
exports.fonts = fonts;
exports.clean = clean;
exports.browserSync = browserSync;
exports.build = build;
exports.watch = watch;
exports.default = watch;