# Form 表单

::: tip
<a href="https://hbowen.gitee.io/aw-form-making/" style="padding: 15px 0;display: block;">
点击这里进入 低代码表单设计器 🔨
</a>

:::

<script>
import formTemplate from './form-template.js';
export default {
  name: 'Form',
  data() {
    return {
      form:formTemplate.form,
      defaultValue: {}, // 默认值
    }
  },
  methods: {
    handleDataChange(field, value, data) {
      console.log(field, value, data)
    },
    handleSubmit0() {
      this.$refs.awForm0
        .getData()
        .then((data) => {
           console.log('表单提交数据:')
           console.log(data)
           this.$message({
            message: `表单提交数据 年龄:${data.age} >>  姓名:${data.name} >> 药品值:${data.drug_name}`,
            type: 'success'
          });
        })
        .catch((e) => {
          console.log('表单数据未填写完整')
          this.$message({
            message: '表单数据未填写完整',
            type: 'warning'
          });
        })
    },
    handleSubmit1() {
      this.$refs.awForm1
        .getData()
        .then((data) => {
           console.log('表单提交数据:')
           console.log(data)
           this.$message({
            message: `表单提交数据 输入框值:${data.input} >>  多选框值:${data.checkbox} `,
            type: 'success'
          });
        })
        .catch((e) => {
          console.log('表单数据未填写完整')
          this.$message({
            message: '表单数据未填写完整',
            type: 'warning'
          });
        })
    },
    reset(){
      this.$refs.awForm1.reset()
    }
  }
}
</script>
<br/>

<demo name="基础用法" info="基础的用法。" :code='form[0].template+form[0].script'>
<template v-slot:container>
<aw-form :data="form[0].columns" :value="defaultValue" :remote="form[0].remote" @on-change="handleDataChange" ref="awForm0">
    <template v-slot:blank> 这里是自定义的 </template>
    <template slot="footer">
      <el-button icon="el-icon-circle-close" :size="form[0].columns.config.size"  >取 消</el-button>
      <el-button 
      icon="el-icon-circle-check" type="primary" 
      :size="form[0].columns.config.size" 
      @click="handleSubmit0">确 认</el-button>
    </template>
</aw-form>
</template>
</demo>

<demo name="栅格布局" info="栅格布局以及表单默认值的用法。" :code='form[1].template+form[1].script'>
<template v-slot:container>
<aw-form :data="form[1].columns" :value="form[1].defaultValue" :remote="form[1].remote" @on-change="handleDataChange" ref="awForm1">
    <template v-slot:blank> 这里是自定义的 </template>
    <template slot="footer">
      <el-button icon="el-icon-circle-close" :size="form[1].columns.config.size"  @click="reset">重 置</el-button>
      <el-button 
      icon="el-icon-circle-check" type="primary" 
      :size="form[1].columns.config.size" 
      @click="handleSubmit1">确 认</el-button>
    </template>
</aw-form>
</template>
</demo>

<br/>
<br/>
<br/>

### Form Attributes

| 属性   | 说明                 | 类型   | 是否必填 | 默认值 |
| :----- | :------------------- | :----- | :------- | :----- |
| data   | 表单展示的内容配置项 | Object | true     | -      |
| value  | 展示内容默认值       | Object | false    | -      |
| remote | 远程请求接口列表集合 | Object | false    | -      |

<br/>

### Form Events

| 方法      | 说明                   | 类型     | 是否必填 | 默认值 |
| :-------- | :--------------------- | :------- | :------- | :----- |
| on-change | 表单内容发生改变时触发 | Function | false    | -      |

<br/>

### Form 向外暴露的方法

::: tip
使用 $ref 调用 Form 组件中的方法
:::
| 方法 | 说明 | 类型 | 是否必填 | 默认值 |
| :----- | :------------------- | :----- | :------- | :----- |
| getData | 获取表单中数据 | Function | false | - |
| reset | 重置表单中的数据 | Function | false | - |

<br/>

### Data-Item Attributes

| 参数          | 说明                                                                 | 类型    | 是否必要 | 默认值        |
| :------------ | :------------------------------------------------------------------- | :------ | :------- | :------------ |
| type          | 组件的类型                                                           | String  | true     | -             |
| name          | label 展示名称                                                       | String  | true     | -             |
| model         | 绑定的值                                                             | String  | false    | -             |
| rules         | 验证规则                                                             | Array   | false    | -             |
| options       | 组件中配置参数                                                       | Object  | -        | -             |
| defaultValue  | 默认值                                                               | Any     | -        | -             |
| dataType      | type 为 input 时的数据类型                                           | String  | -        | text          |
| showWordLimit | 是否显示输入字数统计，只在 type = "text" 或 type = "textarea" 时有效 | Boolean | -        | false         |
| maxlength     | type 为 input 时的最大输入长度                                       | Number  | false    | -1            |
| width         | 组件宽度                                                             | String  | -        | -             |
| placeholder   | 组件占位内容                                                         | String  | -        | -             |
| disabled      | 是否禁用                                                             | Boolean | -        | false         |
| clearable     | 是否可清空                                                           | Boolean | -        | false         |
| multiple      | 是否多选                                                             | Boolean | -        | false         |
| filterable    | 是否可搜索                                                           | Boolean | -        | false         |
| required      | 是否必填 (为 true 时与 rules 成对出现)                               | Boolean | -        | false         |
| remote        | 是否开启远程请求                                                     | Boolean | -        | false         |
| options       | 未走远程请求的下拉数据                                               | Array   | -        | -             |
| remoteOptions | 远程请求的数据                                                       | Array   | -        | -             |
| props         | 下拉数据格式转化 { value: 'value', label: 'label' }                  | Object  | -        | {value,label} |
