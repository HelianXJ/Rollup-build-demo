# Rollup-build-demo

### 步骤

	1. 下载相关依赖包
	
	```javascript
	$ npm install
	```

	2. 打包index.js 文件，默认是打包为cjs形式，可到rollup.config.js修改

	```javascript
	$ rollup -c
	```

	也可以命令行的形式直接打包
	```javascript
	$ rollup index.js -o public/bundle.js -f cjs  //cjs 可更换为amd /  es6 / iife / umd
	```

	3. 查看public文件下打包后的bundle.js文件
