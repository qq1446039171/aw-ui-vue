# Button 按钮

<demo name="基础用法" info="基础的按钮用法。"
code='<aw-button>默认按钮</aw-button>
<aw-button type="primary">主要按钮</aw-button>
<aw-button type="success">成功按钮</aw-button>
<aw-button type="danger">错误按钮</aw-button>
<aw-button type="warning">警告按钮</aw-button>
'>
<template v-slot:container>
<aw-button>默认按钮</aw-button>
<aw-button type="primary">主要按钮</aw-button>
<aw-button type="success">成功按钮</aw-button>
<aw-button type="danger">错误按钮</aw-button>
<aw-button type="warning">警告按钮</aw-button>
</template>
</demo>

<demo name="不同尺寸" info="Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。"
code='<aw-button type="primary" size="mini">默认按钮</aw-button>
<aw-button type="primary" size="small">默认按钮</aw-button>
<aw-button type="primary" size="medium">默认按钮</aw-button>'>
<template v-slot:container>
<aw-button type="primary" size="mini">默认按钮</aw-button>
<aw-button type="primary" size="small">默认按钮</aw-button>
<aw-button type="primary" size="medium">默认按钮</aw-button>
</template>
</demo>

<demo name="禁用" info="按钮不可用状态。"
code='<aw-button type="primary" disabled>主要按钮</aw-button>
<aw-button type="success" disabled>成功按钮</aw-button>
<aw-button type="danger" disabled>错误按钮</aw-button>
<aw-button type="warning" disabled>警告按钮</aw-button>
'>
<template v-slot:container>
<aw-button type="primary" disabled>主要按钮</aw-button>
<aw-button type="success" disabled>成功按钮</aw-button>
<aw-button type="danger" disabled>错误按钮</aw-button>
<aw-button type="warning" disabled>警告按钮</aw-button>
</template>
</demo>

<demo name="圆角" info="按钮添加圆角属性。"
code='<aw-button type="primary" size="mini" round>默认按钮</aw-button>
<aw-button type="primary" size="small" round>默认按钮</aw-button>
<aw-button type="primary" size="medium" round>默认按钮</aw-button>'>
<template v-slot:container>
<aw-button type="primary" size="mini" round>默认按钮</aw-button>
<aw-button type="primary" size="small" round>默认按钮</aw-button>
<aw-button type="primary" size="medium" round>默认按钮</aw-button>
</template>
</demo>

### Attributes

| 属性      | 说明         | 类型    | 可选值                              | 是否必要 | 默认值 |
| :-------- | :----------- | :------ | :---------------------------------- | :------- | :----- |
| size      | 按钮大小     | String  | medium / small / mini               | false    | -      |
| disabledd | 是否禁用状态 | boolean | -                                   | false    | false  |
| round     | 是否圆角按钮 | boolean | -                                   | false    | -      |
| type      | 类型         | String  | primary/success/warning/danger/info | false    | -      |
