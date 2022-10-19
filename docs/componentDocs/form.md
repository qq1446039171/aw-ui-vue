# Form

Form 组件

### 示例

<script>
export default {
  name: 'Form',
  data() {
    return {
      widgetModels: {}, // 默认值
      formColumns:{
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
              width: '',
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
      },
      // 远程请求
      remoteList: {
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
          // data check success
          // data - form data
        })
        .catch((e) => {
          // data check failed
          console.log('表单数据未填写完整')
        })
    }
  }
}
</script>
<br/>
   <aw-form :data="formColumns" :value="widgetModels" :remote="remoteList" @on-change="handleDataChange" ref="awForm">
      <template v-slot:blank="scope"> 这里是自定义的 {{ scope.model.blank }} </template>
   </aw-form>
   <el-button type="primary" @click="handleSubmit">提交</el-button>

### 代码

```html
<template>
  <div>
    <aw-form :data="formColumns" :value="widgetModels" :remote="remoteList" @on-change="handleDataChange" ref="awForm">
      <template v-slot:blank="scope"> 这里是自定义的 {{ scope.model.blank }} </template>
    </aw-form>
    <el-button type="primary" @click="handleSubmit">提交</el-button>
  </div>
</template>
<script>
  import AwForm from './AwForm.js'
  export default {
    name: 'Form',
    data() {
      return {
        widgetModels: {}, // 默认值
        formColumns: AwForm.Columns,
        // 远程请求
        remoteList: AwForm.Remote
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
```

```js
// AwForm.js
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
```

### Attributes  

待更新中 

<!-- | 属性  | 说明                       | 类型   | 可选值 | 是否必要 | 默认值 |
| :---- | :------------------------- | :----- | :----- | :------- | :----- |
| width | label 的宽度,超出会隐藏... | String | -      | false    | auto   | -->
