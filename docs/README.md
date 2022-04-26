<!--
 * @Description: 
 * @Version: 2.0
 * @Author: 黄博文
 * @Date: 2022-04-19 15:11:49
 * @LastEditors: 黄博文
 * @LastEditTime: 2022-04-26 11:10:44
-->
# 快速开始

#### 安装组件库

```bash
npm i aw-ui-vue
```

#### 引用组件库

> 在 main.js 中引用组件库

```js
// 全部引入
import 'aw-ui-vue/dist/css/index.css'
import AwUI from 'aw-ui-vue'
Vue.use(AwUI)

// 按需引入
import 'aw-ui-vue/dist/css/demo.css'
import { Demo } from 'aw-ui-vue'
Vue.use(Demo)
```
