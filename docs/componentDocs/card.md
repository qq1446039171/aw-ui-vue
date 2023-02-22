# 卡片组件

<demo name="基础用法" info="基础卡片组件的用法。" code='<aw-card imgSrc="/aw-ui-vue/example.jpg" summary="这是一个测试案例" />'>
  <template v-slot:container>
    <aw-card imgSrc="/aw-ui-vue/example.jpg" summary="这是一个测试案例" />
  </template>
</demo>

<demo name="插槽用法" info="footer插槽用法" code='
<aw-card imgSrc="/aw-ui-vue/example.jpg" 
summary="Node.js+Express+Koa2+开发Web Server博客" 
:width="370" 
:imgHeight="90">
  Node.js+Express+Koa2+开发Web Server博客
  <template slot="footer">
    <div class="footer">
      <div class="level">中级 . 523人报名</div>
      <div class="price">￥899.00</div>
    </div>
  </template>
</aw-card>'>
<template v-slot:container>
<aw-card imgSrc="/aw-ui-vue/example.jpg" summary="Node.js+Express+Koa2+开发Web Server博客" :width="370" :imgHeight="90">
Node.js+Express+Koa2+开发 Web Server 博客
<template slot="footer">
<div class="footer">
<div class="level">中级 . 523 人报名</div>
<div class="price" style=" color: #f01414;">￥ 899.00</div>
</div>
</template>
</aw-card>
</template>
</demo>

<style lang="scss" >
  .level {
      color: #9199a1;
    }
.footer {
    padding: 0 8px;
    font-size: 12px;
    text-align: left;
}
</style>

### Attributes

| 属性      | 说明         | 类型        | 是否必要 | 默认值 |
| :-------- | :----------- | :---------- | :------- | :----- |
| width     | 卡片的宽度   | Number      | false    | -      |
| imgSrc    | 图片资源地址 | String      | true     | -      |
| imgHeight | 图片高度     | Number      | false    | -      |
| summary   | 卡片的概要   | String/Slot | false    | -      |
| footer    | 卡片底部     | Slot        | -        | -      |
