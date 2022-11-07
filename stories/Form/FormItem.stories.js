import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
Vue.use(ElementUI)
import FormItem from './FormItem.vue'

export default {
  title: 'Form/FormItem',
  component: FormItem,
  argTypes: {}
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FormItem },
  template: `
    <form-item
      :key="item.model"
      :models.sync="models"
      :remote="remote"
      :widget="item"
      :rules="item.rules"
      @input-change="onInputChange"
    >
    </form-item>`,
  methods: {
    onInputChange(e) {}
  }
})

export const Primary = Template.bind()
Primary.args = {
  models: {},
  item: {
    type: 'input',
    options: {
      width: '100%',
      defaultValue: '',
      required: true,
      dataType: 'string',
      pattern: '', // 正则模式
      placeholder: '',
      disabled: false,
      maxlength: -1,
      showWordLimit: false,
      remoteFunc: 'func_1665644318000_84350'
    },
    name: '年龄',
    model: 'age',
    rules: [
      {
        type: 'string',
        message: '单行文本格式不正确'
      },
      {
        required: true,
        message: '单行文本必须填写'
      }
    ]
  },
  remote: {
    getDrugName(resolve) {
      setTimeout(() => {
        const options = [
          { age: '1', name: '药品1' },
          { age: '2', name: '药品2' },
          { age: '3', name: '药品3' }
        ]
        resolve(options)
      }, 1000)
    }
  }
}
// {
//   type: 'input',
//   options: {
//     width: '100%',
//     defaultValue: '',
//     required: true,
//     dataType: 'string',
//     pattern: '', // 正则模式
//     placeholder: '',
//     disabled: false,
//     maxlength: -1,
//     showWordLimit: false,
//     remoteFunc: 'func_1665644318000_84350'
//   },
//   name: '年龄',
//   model: 'age',
//   rules: [
//     {
//       type: 'string',
//       message: '单行文本格式不正确'
//     },
//     {
//       required: true,
//       message: '单行文本必须填写'
//     }
//   ]
// },
