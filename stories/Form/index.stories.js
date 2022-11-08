import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
Vue.use(ElementUI)
import AwForm from './index.vue'

export default {
  title: 'Form/Form',
  component: AwForm,
  argTypes: {
    data: { control: { type: 'Object' }, description: '表单展示的内容配置项' },
    value: { control: { type: 'Object' }, description: '展示内容默认值' },
    remote: { control: { type: 'Object' }, description: '远程请求接口列表集合' },
    'colItem.model': { description: 'grid内自定义插槽（type为blank时model就是插槽名称）' },
    'item.model': { description: '自定义插槽（type为blank时model就是插槽名称）' },
    footer: {control: { type: 'Object' }, description: '底部按钮footer具名插槽' },
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AwForm },
  template: `
  <aw-form :data="formColumns" :value="widgetModels" :remote="remoteList" @onChange="handleDataChange" ref="awForm">
     <template v-slot:blank="scope"> 这里是自定义的 {{ scope.model.blank }} </template>
     <template slot="footer">
        <el-button icon="el-icon-circle-close" :size="formColumns.config.size" @click="reset">取 消</el-button>
        <el-button icon="el-icon-circle-check" type="primary" :size="formColumns.config.size" @click="save">确 认</el-button>
      </template>
  </aw-form>`,
  methods: {
    handleDataChange(field, value, data) {
      console.log(field, value, data)
    },
    save() {
      this.$refs.awForm
        .getData()
        .then((data) => {
          console.log('表单提交数据:')
          console.log(data)
        })
        .catch((e) => {
          console.log('表单未填写完整')
        })
    },
    reset() {
      this.$refs.awForm.reset()
    }
  }
})

export const Primary = Template.bind()
Primary.args = {
  widgetModels: {}, // 默认值
  formColumns: {
    list: [
      {
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
      {
        type: 'blank',
        options: {
          defaultType: 'String',
          remoteFunc: 'func_1666077843000_28977'
        },
        name: '自定义区域',
        model: 'blank'
      },
      {
        type: 'date',
        options: {
          defaultValue: '',
          readonly: false,
          disabled: false,
          editable: true,
          clearable: true,
          placeholder: '',
          startPlaceholder: '',
          endPlaceholder: '',
          type: 'date',
          format: 'yyyy-MM-dd',
          timestamp: false,
          required: false,
          width: ''
        },
        name: '日期选择器',
        model: 'date',
        rules: []
      },
      {
        type: 'grid',
        columns: [
          {
            span: 12,
            list: [
              {
                type: 'select',
                options: {
                  defaultValue: 'hbw',
                  multiple: false, // 是否启用多选
                  disabled: false, // 是否禁用
                  clearable: true, // 是否一键清除
                  placeholder: '', // input占位符
                  required: false, // 是否必填  为true与 rules 成对出现
                  width: '', // 宽度
                  options: [
                    // 未走远程请求的下拉数据
                    { value: 'hbw', label: '黄博文' },
                    { value: 'zqh', label: '张琼慧' },
                    { value: 'px', label: '小螃蟹' }
                  ],
                  remote: false, // 是否开启远程请求
                  filterable: false, // 是否启用搜索功能
                  remoteOptions: [], // 远程请求的数据
                  props: { value: 'value', label: 'label' } // 下拉数据对象格式
                },
                name: '患者姓名',
                model: 'name',
                rules: [
                  // 效验规则
                  {
                    required: true,
                    message: '下拉选择框必须填写'
                  }
                ]
              }
            ]
          },
          {
            span: 12,
            list: [
              {
                type: 'select',
                options: {
                  defaultValue: '',
                  multiple: false, // 是否启用多选
                  disabled: false, // 是否禁用
                  clearable: true, // 是否一键清除
                  placeholder: '', // input占位符
                  required: true, // 是否必填  为true与 rules 成对出现
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
              }
            ]
          }
        ],
        options: { gutter: 0, justify: 'start', align: 'top' },
        name: '栅格布局',

        model: 'grid_1665644238000_31981',
        rules: []
      }
    ],
    config: { labelWidth: 90, labelPosition: 'right', size: 'small', customClass: '' }
  }, // 配置项
  remoteList: {
    getDrugName(resolve) {
      setTimeout(() => {
        const options = [
          { age: '1', name: '药品1' },
          { age: '2', name: '药品2' },
          { age: '3', name: '药品3' }
        ]
        resolve(options)
      }, 1000)
    },
    funcGetToken(resolve) {
      request.get('http://tools-server.making.link/api/uptoken').then((res) => {
        resolve(res.uptoken)
      })
    }
  } // 远程请求
}
