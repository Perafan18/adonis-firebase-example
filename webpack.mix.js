let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.js('node_modules/materialize-css/dist/js/materialize.min.js', 'public/js/')
.copy('node_modules/materialize-css/dist/css/materialize.min.css', 'public/css/')
.copy('node_modules/jquery/dist/jquery.min.js', 'public/js/')
.copy('node_modules/firebase/firebase-app.js', 'public/js/')
.copy('node_modules/firebase/firebase-auth.js', 'public/js/')
.coffee('resources/assets/scripts/*', 'public/js/');
