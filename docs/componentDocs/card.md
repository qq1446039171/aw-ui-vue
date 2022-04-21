# Card

卡片组件

### 示例

<aw-card imgSrc="/aw-ui-kit/example.jpg" summary="这是一个测试案例"/>

### 代码

```html
<aw-card imgSrc="/aw-ui-kit/example.jpg" summary="这是一个测试案例" />
```

### Attributes

| 属性      | 说明         | 类型        | 是否必要 | 默认值 |
| :-------- | :----------- | :---------- | :------- | :----- |
| width     | 卡片的宽度   | Number      | false    | -      |
| imgSrc    | 图片资源地址 | String      | true     | -      |
| imgHeight | 图片高度     | Number      | false    | -      |
| summary   | 卡片的概要   | String/Slot | false    | -      |
| footer    | 卡片底部     | Slot        | -        | -      |
