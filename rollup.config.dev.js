// Rollup plugins
var rollup = require( 'rollup' );
var babel = require('rollup-plugin-babel');

rollup.rollup({
    entry: 'src/main.js',
    plugins: [ babel() ]
}).then( function ( bundle ) {
    bundle.write({
        format: 'umd',
        moduleName: 'main', //umd或iife模式下，若入口文件含 export，必须加上该属性
        dest: 'rel/bundle.js'
    });
});