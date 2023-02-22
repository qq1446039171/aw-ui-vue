export default {
  template: `
  <aw-form 
  :data="formColumns" 
  :value="widgetModels" 
  :remote="remoteList" 
  @on-change="handleDataChange" 
  ref="awForm">
    <template v-slot:blank="scope"> 这里是自定义的 {{ scope.model.blank }} </template>
    <template slot="footer">
      <el-button 
      icon="el-icon-circle-close" 
      :size="formColumns.config.size">取 消</el-button>
      <el-button 
      icon="el-icon-circle-check" 
      type="primary" 
      :size="formColumns.config.size">确 认</el-button>
    </template>
  </aw-form>`,
  script:`

  <script>
    export default {
      data() {
        return {
          defaultValue: {},
          formColumns:form.columns,
          remoteList: form.remote
        }
      },
    }
  </script>
`,
  columns: {
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
