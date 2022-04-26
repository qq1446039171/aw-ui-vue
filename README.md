# aw-ui-vue 组件库

### 快速开始

#### 1.安装组件库

```shell
npm install aw-ui-vue
```

#### 2.引用组件库

```js
// 全部引入
import 'aw-ui-vue/dist/css/index.css'
import AwUI from 'aw-ui-vue'
Vue.use(AwUI)

//  按需引入(还有点小问题)
import 'aw-ui-vue/dist/css/demo.css'
import { Demo } from 'aw-ui-vue'
Vue.use(Demo)

// 使用 
<aw-demo/>
```
