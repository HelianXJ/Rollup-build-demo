import babel from 'rollup-plugin-babel';

export default {
	entry: 'index.js',
	// format: 'cjs',
	// format: 'umd', //其他形式
	// format: 'iife', //其他形式
	format: 'amd', //其他形式   
	plugins: [babel()],                    
	dest: 'public/bundle.js'
}