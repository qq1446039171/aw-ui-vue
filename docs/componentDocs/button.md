# Button

Button 按钮

<demo name="代码示例" info="按钮类型有：默认按钮、普通按钮、成功按钮、失败按钮、警告按钮。 通过设置type为primary、success、warning、error创建不同样式的按钮，不设置为默认样式。"
code='<aw-button>默认按钮</aw-button>
<aw-button type="primary">主要按钮</aw-button>
<aw-button type="success">成功按钮</aw-button>
<aw-button type="error">错误按钮</aw-button>
<aw-button type="warning">警告按钮</aw-button>
'>
<template v-slot:container>
<aw-button>默认按钮</aw-button>
<aw-button type="primary">主要按钮</aw-button>
<aw-button type="success">成功按钮</aw-button>
<aw-button type="error">错误按钮</aw-button>
<aw-button type="warning">警告按钮</aw-button>
</template>
</demo>

### Attributes

| 属性     | 说明         | 类型    | 可选值                              | 是否必要 | 默认值 |
| :------- | :----------- | :------ | :---------------------------------- | :------- | :----- |
| size     | 按钮大小     | String  | medium / small / mini               | false    | -      |
| disabled | 是否禁用状态 | boolean | -                                   | false    | false  |
| round    | 是否圆角按钮 | boolean | -                                   | false    | -      |
| type     | 类型         | String  | primary/success/warning/danger/info | false    | -      |
