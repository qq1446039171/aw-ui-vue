export default {
  template: `
  <template>
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
        :size="formColumns.config.size"
        @click="handleSubmit">确 认</el-button>
      </template>
    </aw-form>
  </template>`,
  script: `

  <script>
    export default {
      data() {
        return {
          defaultValue: {},
          formColumns:{
            list: [
              {
                type: 'input',
                options: {
                  required: true,
                  dataType: 'string',
                  clearable: true // 是否一键清除
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
                          filterable: false, // 是否启用搜索功能
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
                          clearable: true, // 是否一键清除
                          remote: true,
                          remoteOptions: [],
                          props: { value: 'age', label: 'name' },
                          remoteFunc: 'getDrugName'
                        },
                        name: '药品名称',
                        model: 'drug_name',
                      }
                    ]
                  }
                ],
                options: { gutter: 0, justify: 'start', align: 'top' },
                name: '栅格布局',
                model: 'grid_1665644238000_31981',
              }
            ],
            config: { labelWidth: 90, labelPosition: 'right', size: 'small', customClass: '' }
          },
          remoteList: {
            getDrugName(resolve) {
              // 模拟接口请求
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
      },
      methods: {
        handleDataChange(field, value, data) {
          console.log(field, value, data)
        },
        handleSubmit() {
          this.$refs.awForm
            .getData()
            .then((data) => {
               console.log('表单提交数据:')
               console.log(data)
            })
            .catch((e) => {
              console.log('表单数据未填写完整')
            })
        }
      }
    }
  </script>
`,
  columns: {
    list: [
      {
        type: 'input',
        options: {
          required: true,
          dataType: 'string',
          clearable: true // 是否一键清除
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
                  filterable: false, // 是否启用搜索功能
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
                  clearable: true, // 是否一键清除
                  remote: true,
                  remoteOptions: [],
                  props: { value: 'age', label: 'name' },
                  remoteFunc: 'getDrugName'
                },
                name: '药品名称',
                model: 'drug_name'
              }
            ]
          }
        ],
        options: { gutter: 0, justify: 'start', align: 'top' },
        name: '栅格布局',
        model: 'grid_1665644238000_31981'
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
