let mix = require('laravel-mix')

mix.js('resources/js/card.js', 'dist/js')
    .js('resources/js/tool.js', 'dist/js')
    .sass('resources/sass/tool.scss', 'dist/css/tool.css');
