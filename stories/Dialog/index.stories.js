import AwDialog from './index.vue'
import Vue from 'vue'
import move from 'aw-move'
Vue.use(move)

export default {
  title: 'Dialog/Dialog',
  component: AwDialog,
  argTypes: {}
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AwDialog },
  template: `
  <div style="height:60vh">
    <aw-dialog v-bind="$props">
      <template slot="header"> </template>
      <template> 需要注意的是内容是默认不居中的 </template>
      <template slot="footer">
        <el-button @click="visible = false" size="small">取 消</el-button>
        <el-button type="primary" @click="visible = false" size="small">确 定</el-button>
      </template>
    </aw-dialog>
  </div> 
`
})

export const Dialog = Template.bind()
Dialog.args = {
  visible: true,
  title: '这是一个可拖拽的',
  theme: 'dark'
}
