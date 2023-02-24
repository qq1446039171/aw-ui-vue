# Dialog 标签

<script>
  export default {
    data() {
      return {
        visible: false,
        code:`
          <el-button type="primary"  @click="visible=true" >点击打开弹窗</el-button>

<aw-dialog title="这是一个可拖拽的" :visible.sync="visible">
  <div>需要注意的是内容是默认不居中的</div>
  <template slot="footer">
    <el-button  @click="visible = false" size="small">取 消</el-button>
    <el-button type="primary" @click="visible = false" size="small">确 定</el-button>
  </template>
</aw-dialog>
        `,
        code2:`
          <el-button type="primary"  @click="visible=true" >点击打开弹窗</el-button>

<aw-dialog title="主题应用的用法" :visible.sync="visible" theme="dark" center>
  <div>需要注意的是内容是默认不居中的</div>
  <template slot="footer">
    <el-button  @click="visible = false" size="small">取 消</el-button>
    <el-button type="primary" @click="visible = false" size="small">确 定</el-button>
  </template>
</aw-dialog>
        `,
        visible2: false
      }
    }
  }
</script>

<demo name="基础用法" info="基础用法。" :code='code'>
  <template v-slot:container>
    <el-button type="primary"  @click="visible=true" >点击打开弹窗</el-button>
    <aw-dialog title="这是一个可拖拽的" :visible.sync="visible">
      <div>需要注意的是内容是默认不居中的</div>
      <template slot="footer">
        <el-button n @click="visible = false" size="small">取 消</el-button>
        <el-button type="primary" @click="visible = false" size="small">确 定</el-button>
      </template>
   </aw-dialog>
  </template>
</demo>

<demo name="主题应用" info="主题应用的用法。" :code='code2'>
  <template v-slot:container>
    <el-button type="primary"  @click="visible2=true" >点击打开弹窗</el-button>
    <aw-dialog title="主题应用的用法" :visible.sync="visible2" theme="dark" center>
      <div>需要注意的是内容是默认不居中的</div>
      <template slot="footer">
        <el-button n @click="visible2 = false" size="small">取 消</el-button>
        <el-button type="primary" @click="visible2 = false" size="small">确 定</el-button>
      </template>
   </aw-dialog>
  </template>
</demo>

### Attributes

| 属性      | 说明                                            | 类型    | 可选值     | 是否必要 | 默认值 |
| :-------- | :---------------------------------------------- | :------ | :--------- | :------- | :----- |
| visible   | 是否显示 Dialog，支持 .sync 修饰符              | Boolean | true/false | true     | false  |
| title     | Dialog 的标题，也可通过具名 slot （见下表）传入 | String  | -          | -        | -      |
| width     | Dialog 的宽度                                   | String  | -          | -        | 30%    |
| center    | 是否对头部和底部采用居中布局                    | Boolean | true/false | -        | -      |
| draggable | 是否可拖拽的                                    | Boolean | true/false | -        | true   |
| theme     | 弹窗主题颜色                                    | String  | -/dark     | -        | -      |
