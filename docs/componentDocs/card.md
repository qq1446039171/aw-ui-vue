# Card

卡片组件

### 示例

<br/>
<aw-card imgSrc="/aw-ui-vue/example.jpg" summary="这是一个测试案例"/>
<br/>
<aw-card
      imgSrc="/aw-ui-vue/example.jpg"
      summary="Node.js+Express+Koa2+开发Web Server博客"
      :width="370"
      :imgHeight="90"
    >
      Node.js+Express+Koa2+开发Web Server博客
      <template slot="footer">
        <div class="footer" style="padding: 0 8px;font-size: 12px;text-align: left;">
          <div class="level" style="color: #9199a1;margin-bottom: 8px;">中级 . 523人报名</div>
          <div class="price" style="color: #f01414;">￥899.00</div>
        </div>
      </template>
    </aw-card>

### 代码

```html
<aw-card imgSrc="/aw-ui-vue/example.jpg" summary="这是一个测试案例" />

<aw-card imgSrc="/aw-ui-vue/example.jpg" summary="Node.js+Express+Koa2+开发Web Server博客" :width="370" :imgHeight="90">
  Node.js+Express+Koa2+开发Web Server博客
  <template slot="footer">
    <div class="footer">
      <div class="level">中级 . 523人报名</div>
      <div class="price">￥899.00</div>
    </div>
  </template>
</aw-card>

<style lang="scss" scope>
  .footer {
    padding: 0 8px;
    font-size: 12px;
    text-align: left;
    .level {
      color: #9199a1;
      margin-bottom: 8px;
    }
    .price {
      color: #f01414;
    }
  }
</style>
```

### Attributes

| 属性      | 说明         | 类型        | 是否必要 | 默认值 |
| :-------- | :----------- | :---------- | :------- | :----- |
| width     | 卡片的宽度   | Number      | false    | -      |
| imgSrc    | 图片资源地址 | String      | true     | -      |
| imgHeight | 图片高度     | Number      | false    | -      |
| summary   | 卡片的概要   | String/Slot | false    | -      |
| footer    | 卡片底部     | Slot        | -        | -      |
