# Split 分割

<script>
export default {
  data() {
    return {
      paneLengthPercent:40
    }
  },
}
</script>
<br/>

<demo name="基础用法" info="基础的按钮用法。" code='<aw-split  direction="row" :paneLengthPercent.sync="paneLengthPercent">
    <div slot="left">A</div>
    <div slot="right">B</div>
</aw-split>'>
<template v-slot:container>
<div style="height:300px;border: 1px solid #e5e6eb;">
<aw-split  direction="row" :paneLengthPercent.sync="paneLengthPercent">
<div slot="left" class="plane">A</div>
<div slot="right" class="plane">B</div>
</aw-split>
</div>
</template>
</demo>

<style>
  .plane{
   color: #1e90ffcc;
    height: 100%;
    width: 100%;
    font-size: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

### Attributes

| 属性              | 说明             | 类型   | 可选值     | 是否必要 | 默认值 |
| :---------------- | :--------------- | :----- | :--------- | :------- | :----- |
| paneLengthPercent | 起始区域宽度 (%) | Number | -          | true     | 50     |
| direction         | 布局方向         | String | row/column | false    | row    |
| triggerLength     | 滑块的宽度       | Number | -          | false    | 6      |
| min               | 区域最小占比     | Number | -          | false    | 10     |
| max               | 区域最大占比     | Number | -          | false    | 90     |
