# Label 标签

<demo name="基础用法" info="基础的标签用法。" code='<aw-label required>默认按钮</aw-label>'>
  <template v-slot:container>
    <aw-label required>默认按钮</aw-label>
  </template>
</demo>

<demo name="width用法" info="width标签用法。" code='<aw-label required width="70px">超出的文字会被隐藏唷~</aw-label>'>
  <template v-slot:container>
    <aw-label required width="70px">超出的文字会被隐藏唷~</aw-label>
  </template>

</demo>

### Attributes

| 属性     | 说明                       | 类型   | 可选值 | 是否必要 | 默认值 |
| :------- | :------------------------- | :----- | :----- | :------- | :----- |
| required | 是否必填(文字前会出现\*)   | String | -      | false    | -      |
| width    | label 的宽度,超出会隐藏... | String | -      | false    | auto   |
