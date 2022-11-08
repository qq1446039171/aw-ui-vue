import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
Vue.use(ElementUI)
import FormItem from './index.vue'

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

export const Input = Template.bind()
Input.args = {
  models: {},
  item: {
    type: 'input',
    options: {
      width: '100%',
      defaultValue: '',
      required: true,
      dataType: 'string',
      placeholder: '',
      disabled: false,
      maxlength: -1,
      showWordLimit: false
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
  }
}
export const Select = Template.bind()
Select.args = {
  models: {},
  item: {
    type: 'select',
    options: {
      defaultValue: '1',
      multiple: false, // 是否启用多选
      disabled: false, // 是否禁用
      clearable: false, // 是否一键清除
      placeholder: '', // input占位符
      required: false, // 是否必填  为true与 rules 成对出现
      width: '', // 宽度
      remote: true,
      filterable: false,
      remoteOptions: [],
      props: { value: 'age', label: 'name' },
      remoteFunc: 'getDrugName'
    },
    name: '药品名称',
    model: 'drug_name',
    rules: []
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
