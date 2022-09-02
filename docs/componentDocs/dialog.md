# Dialog

弹窗组件

### 示例
<br/>
<el-button type="primary" icon="el-icon-circle-plus-outline" size="small" @click="visible=true" >点击打开弹窗</el-button>

<aw-dialog title="这是一个可拖拽的" :visible="visible">
    需要注意的是内容是默认不居中的
<template slot="footer">
<el-button @click="visible = false" size="small">取 消</el-button>
<el-button type="primary" @click="visible = false" size="small">确 定</el-button>
</template>
</aw-dialog>

<script>
  export default {
    data() {
      return {
        visible: false
      }
    }
  }
</script>
### 代码

```html
<el-button type="primary" icon="el-icon-circle-plus-outline" size="small" @click="visible = true">
  点击打开弹窗
</el-button>

<aw-dialog title="这是一个可拖拽的" :visible.sync="visible">
  <template> 需要注意的是内容是默认不居中的 </template>
  <template slot="footer">
    <el-button @click="visible = false" size="small">取 消</el-button>
    <el-button type="primary" @click="visible = true" size="small">确 定</el-button>
  </template>
</aw-dialog>

<script>
  export default {
    data() {
      return {
        visible: false
      }
    }
  }
</script>
```

### Attributes

| 属性  | 说明                       | 类型   | 可选值 | 是否必要 | 默认值 |
| :---- | :------------------------- | :----- | :----- | :------- | :----- |
| width | label 的宽度,超出会隐藏... | String | -      | false    | auto   |
