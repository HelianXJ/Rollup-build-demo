# Rollup-build-demo

### 步骤

1、下载相关依赖包


```javascript
$ npm install
```

2、打包index.js 文件，默认是打包为cjs形式，可到rollup.config.js修改

```javascript
$ rollup -c
```

也可以命令行的形式直接打包

```javascript
$ rollup index.js -o public/bundle.js -f amd  //cjs 可更换为amd /  es6 / iife / umd / cjs
```

4、为了index.html 能正常加载index.js显示结果,将依赖的lib/math.js 也用rollup打包到public文件下

```javascript
$ rollup lib/maths.js -o public/lib/maths.js --format amd
```


3、查看public文件下打包后的bundle.js文件; 浏览器打开index.html文件会看到先显示Hello world! 2秒后显示计算结果
