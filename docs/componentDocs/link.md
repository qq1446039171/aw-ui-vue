# Link 文字链接

<demo name="基础用法" info="基础的链接用法。" code='<aw-link type="primary" >文字</aw-link>
<aw-link type="success">文字</aw-link>
<aw-link type="warning">文字</aw-link>
<aw-link type="danger">文字</aw-link>
<aw-link type="info">文字</aw-link>'>
<template v-slot:container>
<aw-link type="primary" >文字</aw-link>
<aw-link type="success">文字</aw-link>
<aw-link type="warning">文字</aw-link>
<aw-link type="danger">文字</aw-link>
<aw-link type="info">文字</aw-link>
</template>
</demo>

<demo name="路由跳转" info="路由跳转的用法。" code='<aw-link type="primary" url="/home" >文字</aw-link>
<aw-link type="success" url="/home">文字</aw-link>
<aw-link type="warning" url="/home">文字</aw-link>
<aw-link type="danger" url="/home">文字</aw-link>
<aw-link type="info" url="/home">文字</aw-link>'>
<template v-slot:container>
<aw-link type="primary" url="/home">文字</aw-link>
<aw-link type="success" url="/home">文字</aw-link>
<aw-link type="warning" url="/home">文字</aw-link>
<aw-link type="danger" url="/home">文字</aw-link>
<aw-link type="info" url="/home">文字</aw-link>
</template>
</demo>
::: warning
路由跳转 --  因为本项目中没有 home 路由，所以会跳转失败 :tada:
:::

<demo name="禁用" info="不可用状态。" code='<aw-link type="primary" disabled >文字</aw-link>
<aw-link type="success" disabled>文字</aw-link>
<aw-link type="warning" disabled>文字</aw-link>
<aw-link type="danger" disabled>文字</aw-link>
<aw-link type="info" disabled>文字</aw-link>'>
<template v-slot:container>
<aw-link type="primary" disabled >文字</aw-link>
<aw-link type="success" disabled>文字</aw-link>
<aw-link type="warning" disabled>文字</aw-link>
<aw-link type="danger" disabled>文字</aw-link>
<aw-link type="info" disabled>文字</aw-link>
</template>
</demo>

### Attributes

| 属性     | 说明         | 类型    | 可选值                              | 默认值 |
| :------- | :----------- | :------ | :---------------------------------- | :----- |
| url      | 路由文字地址 | String  | -                                   | -      |
| disabled | 是否禁用状态 | boolean | -                                   | false  |
| padding  | 边距         | Number  | -                                   | 3      |
| type     | 类型         | String  | primary/success/warning/danger/info | -      |
