# Link

Link 文字链接

### 示例

<br/>
<aw-link type="primary" url="/home?index=1">主要按钮</aw-link>
<aw-link type="primary" url="/home?index=1" disabled>主要按钮</aw-link>

### 代码

```html
<aw-link type="primary" url="/home?index=1">主要按钮</aw-link>
<aw-link type="primary" url="/home?index=1" disabled>主要按钮</aw-link>
```

### Attributes

| 属性     | 说明         | 类型    | 可选值                              | 是否必要 | 默认值 |
| :------- | :----------- | :------ | :---------------------------------- | :------- | :----- |
| url      | 路由跳转地址 | String  | -                                   | false    | -      |
| disabled | 是否禁用状态 | boolean | -                                   | false    | false  |
| padding  | 边距         | Number  | -                                   | false    | 3      |
| type     | 类型         | String  | primary/success/warning/danger/info | false    | -      |
