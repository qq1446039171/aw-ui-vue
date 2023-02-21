# Button 按钮

<demo name="基础用法" info="基础的按钮用法。"
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
