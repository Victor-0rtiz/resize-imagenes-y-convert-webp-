const { src, dest, series } = require('gulp');
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

const paths = {
    imagenes: 'BANNERS/**/*'
};

function imagenes() {
    return src(paths.imagenes)
        .pipe(cache(imagemin({ optimizationLevel: 3 })))
        .pipe(dest('imagemins'));
}

function versionWebp() {
    const opciones = {
        quality: 50
    };
    return src('BANNERS/**/*.{png,jpg}')
        .pipe(webp(opciones))
        .pipe(dest('webp'));
}

exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.default = series(imagenes, versionWebp);
