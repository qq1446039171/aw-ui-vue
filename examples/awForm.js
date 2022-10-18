let AwForm = {
  Columns: {
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
        type: 'radio',
        options: {
          inline: true,
          defaultValue: '',
          options: [
            {
              value: 'Option 1',
              label: 'Option 1'
            },
            {
              value: 'Option 2',
              label: 'Option 2'
            },
            {
              value: 'Option 3',
              label: 'Option 3'
            }
          ],
          required: false,
          width: '',
          remote: false,
          remoteOptions: [],
          props: {
            value: 'value',
            label: 'label'
          },
          remoteFunc: 'func_1666058604000_87864',
          disabled: false
        },
        name: '性别',
        model: 'sex',
        rules: []
      },
      {
        type: 'textarea',
        options: {
          width: '100%',
          defaultValue: '',
          required: false,
          dataType: 'string',
          placeholder: '',
          disabled: false,

          remoteFunc: 'func_1665644318000_84350'
        },
        name: '备注',
        model: 'remark'
      },
      {
        type: 'switch',
        options: {
          defaultValue: false,
          required: false,
          disabled: false,
          remoteFunc: 'func_1666073088000_38396'
        },
        name: '开关',
        model: 'switch'
      },
      {
        type: 'text',
        options: {
          defaultValue: 'This is a text',
          customClass: '',
          remoteFunc: 'func_1666073187000_11767'
        },
        name: '文字',
        model: 'text'
      },
      {
        type: 'slider',

        options: {
          defaultValue: 12,
          disabled: false,
          required: false,
          min: 0,
          max: 100,
          step: 1,
          showInput: false,
          range: false,
          width: '',
          remoteFunc: 'func_1666075988000_6295'
        },
        name: '滑块',

        model: 'slider_1666075988000_6295',
        rules: []
      },
      {
        type: 'select',
        options: {
          width: '60%',
          options: [
            {
              value: 'Option 1',
              label: '123123'
            },
            {
              value: 'Option 2'
            },
            {
              value: 'Option 3'
            }
          ]
        },
        name: '下拉选择框',
        model: 'select_1666056676000_29583',
        rules: []
      },
      {
        type: 'cascader',
        icon: 'icon-jilianxuanze',
        options: {
          defaultValue: [],
          width: '',
          placeholder: '',
          disabled: false,
          clearable: false,
          remote: true,
          remoteOptions: [],
          protoProps: {
            multiple: true
          },
          props: {
            value: 'id',
            label: 'name',
            children: 'children'
          },
          remoteFunc: 'func_test'
        },
        name: '级联选择器',
        model: 'cascader',
        rules: []
      },
      {
        type: 'time',
        icon: 'icon-time',
        options: {
          defaultValue: '',
          readonly: false,
          disabled: false,
          editable: true,
          clearable: true,
          placeholder: '',
          startPlaceholder: '',
          endPlaceholder: '',
          isRange: false,
          arrowControl: true,
          format: 'HH:mm:ss',
          required: false,
          width: '',
          remoteFunc: 'func_1666075913000_32598'
        },
        name: '时间选择器',
        key: '1666075913000_32598',
        model: 'time_1666075913000_32598',
        rules: []
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
          width: '',
          remoteFunc: 'func_1666055115000_81785'
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
                  defaultValue: '1',
                  multiple: false, // 是否启用多选
                  disabled: false, // 是否禁用
                  clearable: true, // 是否一键清除
                  placeholder: '', // input占位符
                  required: false, // 是否必填  为true与 rules 成对出现

                  width: '', // 宽度
                  options: [
                    // 未走远程请求的下拉数据
                    { value: 'Option1', label: 'Option 1' },
                    { value: 'Option2', label: 'Option 2' },
                    { value: 'Option3', label: 'Option 3' }
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
    config: { labelWidth: 100, labelPosition: 'right', size: 'small', customClass: '' }
  },
  Remote: {
    getDrugName(resolve) {
      // 药品名称 drug_name
      // Call callback function once get the data from remote server
      // resolve(data)
      setTimeout(() => {
        const options = [
          { age: '1', name: '药品1' },
          { age: '2', name: '药品2' },
          { age: '3', name: '药品3' }
        ]
        resolve(options)
      }, 1000)
    },
    func_test(resolve) {
      setTimeout(() => {
        const options = [
          { id: '1', name: '1111' },
          { id: '2', name: '2222' },
          { id: '3', name: '3333' }
        ]
        resolve(options)
      }, 2000)
    },
    funcGetToken(resolve) {
      request.get('http://tools-server.making.link/api/uptoken').then((res) => {
        resolve(res.uptoken)
      })
    },
    upload_callback(response, file, fileList) {
      console.log('callback', response, file, fileList)
    }
  }
}

export default AwForm
