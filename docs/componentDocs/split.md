# Split 分割

<script>
export default {
  data() {
    return {
      split:0.4
    }
  },
}
</script>
<br/>

<demo name="基础用法" info="基础的按钮用法。" code='<aw-button>默认按钮</aw-button>'>
  <template v-slot:container>
    <div style="height:300px;border: 1px solid #e5e6eb;">
      <aw-split :value.sync="split">
        <div slot="left"></div>
        <div slot="right"></div>
      </aw-split>
    </div>
  </template>
</demo>

### Attributes

| 属性  | 说明                       | 类型   | 可选值 | 是否必要 | 默认值 |
| :---- | :------------------------- | :----- | :----- | :------- | :----- |
| value | label 的宽度,超出会隐藏... | String | -      | false    | auto   |
