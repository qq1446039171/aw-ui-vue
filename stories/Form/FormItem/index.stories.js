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
    name: { description: 'label展示名称' },
    model: { description: '绑定的值' },
    width: { description: '组件的宽度' },
    defaultValue: { description: '默认值' },
    placeholder: { description: '组件占位内容' },
    clearable: { description: '是否可清空' },
    disabled: { description: '是否禁用' },
    dataType: { description: 'type为input时的数据类型' },
    maxlength: { description: 'type为input时的最大输入长度' },
    remotes: { description: '是否禁用' },
    showWordLimit: { description: '是否显示输入字数统计，只在 type = "text" 或 type = "textarea" 时有效' },
    multiple: { description: '是否多选' },
    filterable: { description: '是否可搜索' },
    props: { description: '指定选项的值与标签为选项对象的某个属性值' },
    options: { description: '下拉框的选项列表' },
    remote: { description: '是否从远程获取下拉框内的数据' },
    remoteFunc: { description: '远程请求的函数名称' },
    remoteOptions: { description: '远程请求的下拉框的选项列表' },
    autosize: {
      description: '自适应内容高度，只对 type="textarea" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }'
    },
    inline: { description: 'type为radio时,选项是否占一行' },
    dateType: {
      control: { type: 'select' },
      options: [
        'year',
        'month',
        'date',
        'dates',
        'months',
        'yearsweek',
        'datetime',
        'datetimerange',
        'daterange',
        'monthrange',
      ]
    }
  }
}
// Input组件
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FormItem },
  template: `
    <form-item v-bind="$props" >
    </form-item>`,
  methods: {
    onInputChange(e) {}
  }
})
export const Input = Template.bind()
Input.args = {
  Columns: {
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
      showWordLimit: false
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
export const Textarea = Template.bind()
Textarea.args = {
  Columns: {
    type: 'textarea',
    name: '年龄',
    model: 'age',
    options: {
      width: '100%',
      defaultValue: '',
      autosize: { minRows: 2, maxRows: 4 },
      required: true,
      placeholder: '',
      disabled: false,
      maxlength: -1,
      showWordLimit: false
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
  type: 'textarea',
  name: '年龄',
  model: 'age',
  width: '100%',
  autosize: { minRows: 2, maxRows: 4 },
  defaultValue: '',
  dataType: 'string',
  placeholder: '占位符',
  disabled: false,
  showWordLimit: false,
  maxlength: -1,
  clearable: true
}

export const Select = Template.bind()
Select.args = {
  // 便于查看文档的参数
  Columns: {
    type: 'select',
    name: '年龄',
    model: 'age',
    options: {
      defaultValue: '',
      multiple: false, // 是否启用多选
      disabled: false, // 是否禁用
      clearable: false, // 是否一键清除
      placeholder: '', // input占位符
      required: false, // 是否必填  为true与 rules 成对出现
      width: '', // 宽度
      options: [
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
    rules: [
      {
        required: true,
        message: '下拉选择框必须填写'
      }
    ]
  },
  Remotes: {
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
  },

  // 真正传给组件的参数
  type: 'select',
  name: '药品名称',
  model: 'drugName',
  defaultValue: '',
  multiple: false, // 是否启用多选
  disabled: false, // 是否禁用
  clearable: false, // 是否一键清除
  placeholder: '占位符', // input占位符
  width: '100%', // 宽度
  defaultOptions: [
    // 未走远程请求的下拉数据
    { value: 'hbw', label: '黄博文' },
    { value: 'zqh', label: '张琼慧' },
    { value: 'px', label: '小螃蟹' }
  ],
  remote: true,
  filterable: false,
  remoteOptions: [], // 远程请求的options会放在这里面
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

export const Radio = Template.bind()
Radio.args = {
  // 便于查看文档的参数
  Columns: {
    type: 'select',
    name: '性别',
    model: 'sex',
    options: {
      defaultValue: '',
      disabled: false, // 是否禁用
      width: '100%', // 宽度
      inline: true, //选项是否占一行
      options: [
        // 未走远程请求的下拉数据
        { value: 'hbw', label: '黄博文' },
        { value: 'zqh', label: '张琼慧' },
        { value: 'px', label: '小螃蟹' }
      ]
    },

    rules: [
      {
        required: true,
        message: '下拉选择框必须填写'
      }
    ]
  },
  // 真正传给组件的参数
  type: 'radio',
  name: '性别',
  model: 'drugName',
  defaultValue: '',
  disabled: false, // 是否禁用
  width: '100%', // 宽度
  inline: true, //选项是否占一行
  defaultOptions: [
    // 未走远程请求的下拉数据
    { value: 'hbw', label: '黄博文' },
    { value: 'zqh', label: '张琼慧' },
    { value: 'px', label: '小螃蟹' }
  ]
}

export const Checkbox = Template.bind()
Checkbox.args = {
  // 便于查看文档的参数
  Columns: {
    type: 'checkbox',
    name: '性别',
    model: 'sex',
    options: {
      defaultValue: [],
      disabled: false, // 是否禁用
      width: '100%', // 宽度
      inline: true, //选项是否占一行
      // 远程请求
      remote: true,
      filterable: false,
      remoteOptions: [],
      props: { value: 'age', label: 'name' },
      remoteFunc: 'getDrugName'
    },
    rules: [
      {
        required: true,
        message: '下拉选择框必须填写'
      }
    ]
  },
  Remotes: {
    getDrugName(resolve) {
      setTimeout(() => {
        const options = [
          { age: 1, name: '药品1' },
          { age: 2, name: '药品2' },
          { age: 3, name: '药品3' }
        ]
        resolve(options)
      }, 1000)
    }
  },
  // 真正传给组件的参数
  type: 'checkbox',
  name: '性别',
  model: 'drugName',
  defaultValue: [],
  disabled: false, // 是否禁用
  width: '100%', // 宽度
  inline: true, //选项是否占一行
  remote: true,
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

export const Cascader = Template.bind()
Cascader.args = {
  // 便于查看文档的参数
  Columns: {
    type: 'cascader',
    name: '年龄',
    model: 'age',
    options: {
      defaultValue: '',
      disabled: false, // 是否禁用
      clearable: false, // 是否一键清除
      placeholder: '', // input占位符
      required: false, // 是否必填  为true与 rules 成对出现
      width: '100%', // 宽度
      options: [
        // 未走远程请求的下拉数据
        { value: 'hbw', label: '黄博文', children: [{ value: 'zqh1', label: '张琼慧1' }] },
        { value: 'zqh', label: '张琼慧', children: [{ value: 'zqh2', label: '张琼慧2' }] },
        { value: 'px', label: '小螃蟹', children: [{ value: 'zqh3', label: '张琼慧3' }] }
      ]
    },
    rules: [
      {
        required: true,
        message: '下拉选择框必须填写'
      }
    ]
  },
  // 真正传给组件的参数
  type: 'cascader',
  name: '药品名称',
  model: 'drugName',
  defaultValue: '',
  disabled: false, // 是否禁用
  clearable: false, // 是否一键清除
  placeholder: '占位符', // input占位符
  width: '100%', // 宽度
  defaultOptions: [
    // 未走远程请求的下拉数据
    { value: 'hbw', label: '黄博文', children: [{ value: 'zqh1', label: '张琼慧1' }] },
    { value: 'zqh', label: '张琼慧', children: [{ value: 'zqh2', label: '张琼慧2' }] },
    { value: 'px', label: '小螃蟹', children: [{ value: 'zqh3', label: '张琼慧3' }] }
  ]
}

export const Switch = Template.bind()
Switch.args = {
  // 便于查看文档的参数
  Columns: {
    type: 'switch',
    name: '是否开启',
    model: 'sex',
    options: {
      disabled: false // 是否禁用
    },
    rules: [
      {
        required: true,
        message: '此项必须填写'
      }
    ]
  },
  // 真正传给组件的参数
  type: 'switch',
  disabled: false,
  name: '是否开启',
  model: 'sex'
}

export const Text = Template.bind()
Text.args = {
  // 便于查看文档的参数
  Columns: {
    type: 'text',
    name: '备注',
    model: 'sex'
  },
  // 真正传给组件的参数
  type: 'text',
  name: '备注',
  model: 'sex'
}

export const Slider = Template.bind()
Slider.args = {
  // 便于查看文档的参数
  Columns: {
    type: 'slider',
    name: '滑块',
    model: 'sex',
    options: {
      width: '100%',
      min: 5,
      max: 10,
      disabled: false,
      step: 2,
      showInput: false,
      range: false
    }
  },
  // 真正传给组件的参数
  type: 'slider',
  name: '备注',
  model: 'sex',
  width: '100%',
  min: 5,
  max: 100,
  disabled: false,
  step: 1,
  showInput: false,
  range: false
}

export const Time = Template.bind()
Time.args = {
  // 便于查看文档的参数
  Columns: {
    type: 'time',
    name: '时间选择器',
    model: 'sex',
    options: {
      defaultValue: '',
      width: '200px',
      isRange: true,
      placeholder: '占位符',
      startPlaceholder: '',
      endPlaceholder: '',
      disabled: false,
      clearable: false,
      arrowControl: false,
      format: 'HH:mm:ss',
      editable: true
    }
  },
  // 真正传给组件的参数
  type: 'time',
  name: '时间选择器',
  model: 'sex',
  width: '200px',
  defaultValue: '',
  isRange: false,
  placeholder: '占位符',
  startPlaceholder: '',
  endPlaceholder: '',
  disabled: false,
  clearable: false,
  arrowControl: false,
  format: 'HH:mm:ss',
  editable: true
}

export const Date = Template.bind()
Date.args = {
  // 便于查看文档的参数
  Columns: {
    type: 'date',
    name: '日期选择器',
    model: 'sex',
    options: {
      defaultValue: '',
      width: '300px',
      type: 'date',
      isRange: true,
      placeholder: '占位符',
      startPlaceholder: '',
      endPlaceholder: '',
      disabled: false,
      clearable: false,
      format: 'yyyy-MM-dd HH:mm:ss',
      editable: true,
      timestamp: false //JS时间戳	仅 value-format 可用；组件绑定值为number类型
    }
  },
  // 真正传给组件的参数
  type: 'date',
  dateType: 'date',
  name: '日期选择器',
  model: 'sex',
  width: '300px',
  defaultValue: '',
  isRange: false,
  placeholder: '占位符',
  startPlaceholder: '',
  endPlaceholder: '',
  disabled: false,
  clearable: false,
  format: 'yyyy-MM-dd HH:mm:ss',
  editable: true,
  timestamp: false
}
