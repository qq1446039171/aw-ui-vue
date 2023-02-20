### 项目运行 (2023/02/20 重构项目)
1. 将 docs文档 与 组件库 分离
2. npm run ins 将 组件库 与 docs文档 分别装好包


### 运行程序

1. webpack 版本: "webpack": "^5.0.0-beta.12",
2. "webpack-cli": "^4.9.2"

### 运行 vuepress

1. webpack 版本需要在 4.0 几的版本 "webpack": "4.44.1"
   <!-- 2. 安装 async-validator: "^1.11.5", -->
   <!-- "async-validator": "^4.1.1", -->

### 兼容故事书跟程序 
故事书默认webpack4 而vue-cli用的5.0对应的webpack需要5以上的版本，所以以前要切换版本运行。
更改故事书默认的webpack版本，即俩套程序均可使用5以上的webpack。
（webpack5 有些版本也不支持文档运行,此处用的是"webpack": "5.21.2"才将程序运行起来）
参考此文章： https://blog.csdn.net/vv_bug/article/details/113845376


<!-- Node.js v14.19.1. -->

### 库打包 npm run build

### 上传 npm publish

### 文档打包 npm run docs:build

### 最后在提交

### 库打包,文档打包,代码提交 npm run deploy

```js
package.json 中
"files": [
    "dist",
    "components"
],
```
