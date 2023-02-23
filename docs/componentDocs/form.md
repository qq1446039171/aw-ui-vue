# form 表单

<script>
import form from './form-template.js';
export default {
  name: 'Form',
  data() {
    return {
      template:form.template,
      script:form.script,

      defaultValue: {}, // 默认值
      formColumns:form.columns, // 配置项
      remoteList: form.remote // 远程请求

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
    }
  }
}
</script>
<br/>

<demo name="基础用法" info="基础的用法。" :code='template+script'>
<template v-slot:container>
<aw-form :data="formColumns" :value="defaultValue" :remote="remoteList" @on-change="handleDataChange" ref="awForm">
    <template v-slot:blank> 这里是自定义的 </template>
    <template slot="footer">
      <el-button icon="el-icon-circle-close" :size="formColumns.config.size"  >取 消</el-button>
      <el-button 
      icon="el-icon-circle-check" type="primary" 
      :size="formColumns.config.size" 
      @click="handleSubmit">确 认</el-button>
    </template>
</aw-form>
</template>
</demo>

### Attributes

| 属性     | 说明         | 类型    | 可选值                              | 默认值 |
| :------- | :----------- | :------ | :---------------------------------- | :----- |
| url      | 路由文字地址 | String  | -                                   | -      |
| disabled | 是否禁用状态 | boolean | -                                   | false  |
| padding  | 边距         | Number  | -                                   | 3      |
| type     | 类型         | String  | primary/success/warning/danger/info | -      |
