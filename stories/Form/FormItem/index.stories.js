import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
Vue.use(ElementUI)
import FormItem from './index.vue'

export default {
  title: 'Form/FormItem',
  component: FormItem,
  argTypes: {
    data: { control: { type: 'Object' }, description: '表单展示的内容配置项' },
    type: { description: '组件的类型' },
    name: { description: 'label名称' },
    model: { description: '绑定的值' }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FormItem },
  template: `
    <form-item v-bind="$props" >
    </form-item>`,
  methods: {
    onInputChange(e) {}
  },
  Columns: {
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
  },

})

export const Input = Template.bind()
Input.args = {
  JSON: {
    type: 'input',
    name: '年龄',
    model: 'age',
    options: {
      width: '100%',
      defaultValue: '',
      required: true,
      dataType: 'string',
      placeholder: '',
      disabled: false,
      maxlength: -1,
      showWordLimit: false,
      clearable: true
    },
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
  type: 'input',
  name: '年龄',
  model: 'age',
  width: '100%',
  defaultValue: '',
  dataType: 'string',
  placeholder: '占位符',
  disabled: false,
  showWordLimit: false,
  maxlength: -1,
  clearable: true
}

const SelectTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FormItem },
  template: `
    <form-item v-bind="$props" >
    </form-item>`,
  methods: {
    onInputChange(e) {}
  },
  Columns: {
    defaultValue: '',
    multiple: false, // 是否启用多选
    disabled: false, // 是否禁用
    clearable: false, // 是否一键清除
    placeholder: '', // input占位符
    required: false, // 是否必填  为true与 rules 成对出现
    width: '', // 宽度
    selectOptions: [
      // 未走远程请求的下拉数据
      { value: 'hbw', label: '黄博文' },
      { value: 'zqh', label: '张琼慧' },
      { value: 'px', label: '小螃蟹' }
    ],
    remote: true,
    filterable: false,
    remoteOptions: [],
    props: { value: 'age', label: 'name' },
    remoteFunc: 'getDrugName'
  },
})
export const Select = SelectTemplate.bind()
Select.args = {
  options: {
    defaultValue: '',
    multiple: false, // 是否启用多选
    disabled: false, // 是否禁用
    clearable: false, // 是否一键清除
    placeholder: '', // input占位符
    required: false, // 是否必填  为true与 rules 成对出现
    width: '', // 宽度
    selectOptions: [
      // 未走远程请求的下拉数据
      { value: 'hbw', label: '黄博文' },
      { value: 'zqh', label: '张琼慧' },
      { value: 'px', label: '小螃蟹' }
    ],
    remote: true,
    filterable: false,
    remoteOptions: [],
    props: { value: 'age', label: 'name' },
    remoteFunc: 'getDrugName'
  },
  type: 'select',
  name: '药品名称',
  model: 'drugName',
  defaultValue: '1',
  multiple: false, // 是否启用多选
  disabled: false, // 是否禁用
  clearable: false, // 是否一键清除
  placeholder: '', // input占位符
  width: '', // 宽度
  selectOptions: [
    // 未走远程请求的下拉数据
    { value: 'hbw', label: '黄博文' },
    { value: 'zqh', label: '张琼慧' },
    { value: 'px', label: '小螃蟹' }
  ],
  remote: true,
  filterable: false,
  remoteOptions: [],
  props: { value: 'age', label: 'name' },
  remoteFunc: 'getDrugName',
  remotes: {
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
