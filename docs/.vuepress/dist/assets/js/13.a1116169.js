(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{564:function(t,e,l){"use strict";l.r(e);var a={form:[{template:'\n    <template>\n      <aw-form \n      :data="formColumns" \n      :value="widgetModels" \n      :remote="remoteList" \n      @on-change="handleDataChange" \n      ref="awForm">\n        <template v-slot:blank="scope"> 这里是自定义的 {{ scope.model.blank }} </template>\n        <template slot="footer">\n          <el-button \n          icon="el-icon-circle-close" \n          :size="formColumns.config.size">取 消</el-button>\n          <el-button \n          icon="el-icon-circle-check" \n          type="primary" \n          :size="formColumns.config.size"\n          @click="handleSubmit">确 认</el-button>\n        </template>\n      </aw-form>\n    </template>',script:"\n  \n    <script>\n      export default {\n        data() {\n          return {\n            defaultValue: {},\n            formColumns:{\n              list: [\n                {\n                  type: 'input',\n                  options: {\n                    required: true,\n                    dataType: 'string',\n                    clearable: true // 是否一键清除\n                  },\n                  name: '年龄',\n                  model: 'age',\n                  rules: [\n                    {\n                      type: 'string',\n                      message: '单行文本格式不正确'\n                    },\n                    {\n                      required: true,\n                      message: '单行文本必须填写'\n                    }\n                  ]\n                },\n                {\n                  type: 'blank',\n                  name: '自定义区域',\n                  model: 'blank'\n                },\n                {\n                  type: 'grid',\n                  columns: [\n                    {\n                      span: 12,\n                      list: [\n                        {\n                          type: 'select',\n                          options: {\n                            defaultValue: 'hbw',\n                            multiple: false, // 是否启用多选\n                            disabled: false, // 是否禁用\n                            clearable: true, // 是否一键清除\n                            filterable: false, // 是否启用搜索功能\n                            placeholder: '', // input占位符\n                            required: false, // 是否必填  为true与 rules 成对出现\n                            width: '', // 宽度\n                            options: [\n                              // 未走远程请求的下拉数据\n                              { value: 'hbw', label: '黄博文' },\n                              { value: 'zqh', label: '张琼慧' },\n                              { value: 'px', label: '小螃蟹' }\n                            ],\n                            remote: false, // 是否开启远程请求\n                            remoteOptions: [], // 远程请求的数据\n                            props: { value: 'value', label: 'label' } // 下拉数据对象格式\n                          },\n                          name: '患者姓名',\n                          model: 'name',\n                          rules: [\n                            // 效验规则\n                            {\n                              required: true,\n                              message: '下拉选择框必须填写'\n                            }\n                          ]\n                        }\n                      ]\n                    },\n                    {\n                      span: 12,\n                      list: [\n                        {\n                          type: 'select',\n                          options: {\n                            clearable: true, // 是否一键清除\n                            remote: true,\n                            remoteOptions: [],\n                            props: { value: 'age', label: 'name' },\n                            remoteFunc: 'getDrugName'\n                          },\n                          name: '药品名称',\n                          model: 'drug_name',\n                        }\n                      ]\n                    }\n                  ],\n                  options: { gutter: 0, justify: 'start', align: 'top' },\n                  name: '栅格布局',\n                  model: 'grid_1665644238000_31981',\n                }\n              ],\n              config: { \n                labelWidth: 90, \n                labelPosition: 'right', \n                size: 'small', \n                customClass: '' \n              }\n            },\n            remoteList: {\n              getDrugName(resolve) {\n                // 模拟接口请求\n                setTimeout(() => {\n                  const options = [\n                    { age: '1', name: '药品1' },\n                    { age: '2', name: '药品2' },\n                    { age: '3', name: '药品3' }\n                  ]\n                  resolve(options)\n                }, 1000)\n              }\n            }\n          }\n        },\n        methods: {\n          handleDataChange(field, value, data) {\n            console.log(field, value, data)\n          },\n          handleSubmit() {\n            this.$refs.awForm\n              .getData()\n              .then((data) => {\n                 console.log('表单提交数据:')\n                 console.log(data)\n              })\n              .catch((e) => {\n                console.log('表单数据未填写完整')\n              })\n          }\n        }\n      }\n    <\/script>\n  ",columns:{list:[{type:"input",options:{required:!0,dataType:"string",clearable:!0},name:"年龄",model:"age",rules:[{type:"string",message:"单行文本格式不正确"},{required:!0,message:"单行文本必须填写"}]},{type:"blank",name:"自定义区域",model:"blank"},{type:"grid",columns:[{span:12,list:[{type:"select",options:{defaultValue:"hbw",multiple:!1,disabled:!1,clearable:!0,filterable:!1,placeholder:"",required:!1,width:"",options:[{value:"hbw",label:"黄博文"},{value:"zqh",label:"张琼慧"},{value:"px",label:"小螃蟹"}],remote:!1,remoteOptions:[],props:{value:"value",label:"label"}},name:"患者姓名",model:"name",rules:[{required:!0,message:"下拉选择框必须填写"}]}]},{span:12,list:[{type:"select",options:{clearable:!0,remote:!0,remoteOptions:[],props:{value:"age",label:"name"},remoteFunc:"getDrugName"},name:"药品名称",model:"drug_name"}]}],options:{gutter:0,justify:"start",align:"top"},name:"栅格布局",model:"grid_1665644238000_31981"}],config:{labelWidth:90,labelPosition:"right",size:"small",customClass:""}},remote:{getDrugName(t){setTimeout(()=>{t([{age:"1",name:"药品1"},{age:"2",name:"药品2"},{age:"3",name:"药品3"}])},1e3)}}},{template:'\n    <template>\n      <aw-form \n      :data="formColumns" \n      :value="widgetModels" \n      :remote="remoteList" \n      @on-change="handleDataChange" \n      ref="awForm">\n        <template slot="footer">\n          <el-button \n          icon="el-icon-circle-close" \n          :size="formColumns.config.size">重 置</el-button>\n          <el-button \n          icon="el-icon-circle-check" \n          type="primary" \n          :size="formColumns.config.size"\n          @click="handleSubmit">确 认</el-button>\n        </template>\n      </aw-form>\n    </template>',script:"\n  \n    <script>\n      export default {\n        data() {\n          return {\n            defaultValue:{\n              input:'12',\n              checkbox:['2','3']\n            },\n            formColumns:{\n              list: [\n                {\n                  type: 'grid',\n                  name: '栅格布局',\n                  columns: [\n                    {\n                      span: 10,\n                      list: [\n                        {\n                          type: 'input',\n                          name: '输入框',\n                          model: 'input',\n                          options: { \n                            defaultValue:\"\",\n                            disabled:false,\n                            showWordLimit:true,\n                            maxlength:4\n                          },\n                        }\n                      ]\n                    },\n                    {\n                      span: 14,\n                      list: [\n                        {\n                          type: 'checkbox',\n                          name: '多选框组',\n                          model: 'checkbox',\n                          options: {\n                            defaultValue: [],\n                            inline: true,\n                            options: [\n                              { value: '1', label: 'Option1' },\n                              { value: '2', label: 'Option2' },\n                              { value: '3', label: 'Option3' }\n                            ]\n                          },\n                        }\n                      ]\n                    }\n                  ],\n                  options: { gutter: 20, justify: 'start', align: 'top' },\n                  model: 'grid_1677130763000_69706',\n                  labelWidth: 90\n                }\n              ],\n              config: { \n                labelWidth: 90, \n                labelPosition: 'right', \n                size: 'small', \n                customClass: '', \n                footer: 'right' \n              }\n            },\n          }\n        },\n        methods: {\n          handleDataChange(field, value, data) {\n            console.log(field, value, data)\n          },\n          handleSubmit() {\n            this.$refs.awForm\n              .getData()\n              .then((data) => {\n                 console.log('表单提交数据:')\n                 console.log(data)\n              })\n              .catch((e) => {\n                console.log('表单数据未填写完整')\n              })\n          }\n        }\n      }\n    <\/script>\n  ",columns:{list:[{type:"grid",name:"栅格布局",columns:[{span:10,list:[{type:"input",name:"输入框",model:"input",options:{defaultValue:"",disabled:!1,showWordLimit:!0,maxlength:4}}]},{span:14,list:[{type:"checkbox",name:"多选框组",model:"checkbox",options:{defaultValue:[],inline:!0,options:[{value:"1",label:"Option1"},{value:"2",label:"Option2"},{value:"3",label:"Option3"}]}}]}],options:{gutter:20,justify:"start",align:"top"},model:"grid_1677130763000_69706",labelWidth:90}],config:{labelWidth:90,labelPosition:"right",size:"small",customClass:"",footer:"right"}},remote:{getDrugName(t){setTimeout(()=>{t([{age:"1",name:"药品1"},{age:"2",name:"药品2"},{age:"3",name:"药品3"}])},1e3)}},defaultValue:{input:"12",checkbox:["2","3"]}}]},n={name:"Form",data:()=>({form:a.form,defaultValue:{}}),methods:{handleDataChange(t,e,l){console.log(t,e,l)},handleSubmit0(){this.$refs.awForm0.getData().then(t=>{console.log("表单提交数据:"),console.log(t),this.$message({message:`表单提交数据 年龄:${t.age} >>  姓名:${t.name} >> 药品值:${t.drug_name}`,type:"success"})}).catch(t=>{console.log("表单数据未填写完整"),this.$message({message:"表单数据未填写完整",type:"warning"})})},handleSubmit1(){this.$refs.awForm1.getData().then(t=>{console.log("表单提交数据:"),console.log(t),this.$message({message:`表单提交数据 输入框值:${t.input} >>  多选框值:${t.checkbox} `,type:"success"})}).catch(t=>{console.log("表单数据未填写完整"),this.$message({message:"表单数据未填写完整",type:"warning"})})},reset(){this.$refs.awForm1.reset()}}},i=l(1),s=Object(i.a)(n,(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"form-表单"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#form-表单"}},[t._v("#")]),t._v(" Form 表单")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("a",{staticStyle:{padding:"15px 0",display:"block"},attrs:{href:"https://hbowen.gitee.io/aw-form-making/"}},[t._v("\n点击这里进入 低代码表单设计器 🔨\n")])]),t._v(" "),e("br"),t._v(" "),e("demo",{attrs:{name:"基础用法",info:"基础的用法。",code:t.form[0].template+t.form[0].script},scopedSlots:t._u([{key:"container",fn:function(){return[e("aw-form",{ref:"awForm0",attrs:{data:t.form[0].columns,value:t.defaultValue,remote:t.form[0].remote},on:{"on-change":t.handleDataChange},scopedSlots:t._u([{key:"blank",fn:function(){return[t._v(" 这里是自定义的 ")]},proxy:!0}])},[t._v(" "),e("template",{slot:"footer"},[e("el-button",{attrs:{icon:"el-icon-circle-close",size:t.form[0].columns.config.size}},[t._v("取 消")]),t._v(" "),e("el-button",{attrs:{icon:"el-icon-circle-check",type:"primary",size:t.form[0].columns.config.size},on:{click:t.handleSubmit0}},[t._v("确 认")])],1)],2)]},proxy:!0}])}),t._v(" "),e("demo",{attrs:{name:"表单默认值",info:"表单默认值以及栅格布局的用法。",code:t.form[1].template+t.form[1].script},scopedSlots:t._u([{key:"container",fn:function(){return[e("aw-form",{ref:"awForm1",attrs:{data:t.form[1].columns,value:t.form[1].defaultValue,remote:t.form[1].remote},on:{"on-change":t.handleDataChange},scopedSlots:t._u([{key:"blank",fn:function(){return[t._v(" 这里是自定义的 ")]},proxy:!0}])},[t._v(" "),e("template",{slot:"footer"},[e("el-button",{attrs:{icon:"el-icon-circle-close",size:t.form[1].columns.config.size},on:{click:t.reset}},[t._v("重 置")]),t._v(" "),e("el-button",{attrs:{icon:"el-icon-circle-check",type:"primary",size:t.form[1].columns.config.size},on:{click:t.handleSubmit1}},[t._v("确 认")])],1)],2)]},proxy:!0}])}),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h3",{attrs:{id:"form-attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#form-attributes"}},[t._v("#")]),t._v(" Form Attributes")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("是否必填")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("data")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("表单展示的内容配置项")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("value")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("展示内容默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("remote")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("远程请求接口列表集合")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),e("br"),t._v(" "),e("h3",{attrs:{id:"form-events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#form-events"}},[t._v("#")]),t._v(" Form Events")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("方法")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("是否必填")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("on-change")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("表单内容发生改变时触发")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),e("br"),t._v(" "),e("h3",{attrs:{id:"form-向外暴露的方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#form-向外暴露的方法"}},[t._v("#")]),t._v(" Form 向外暴露的方法")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("使用 $ref 调用 Form 组件中的方法")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("方法")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("是否必填")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getData")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("获取表单中数据")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("reset")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重置表单中的数据")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),e("br"),t._v(" "),e("h3",{attrs:{id:"data-item-attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-item-attributes"}},[t._v("#")]),t._v(" Data-Item Attributes")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("是否必要")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("组件的类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("label 展示名称")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("model")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("绑定的值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("rules")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("验证规则")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Array")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("options")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("组件中配置参数")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("defaultValue")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Any")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("dataType")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("type 为 input 时的数据类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("text")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("showWordLimit")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v('是否显示输入字数统计，只在 type = "text" 或 type = "textarea" 时有效')]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("maxlength")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("type 为 input 时的最大输入长度")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("width")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("组件宽度")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("placeholder")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("组件占位内容")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁用")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("clearable")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否可清空")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("multiple")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否多选")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("filterable")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否可搜索")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("required")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否必填 (为 true 时与 rules 成对出现)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("remote")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否开启远程请求")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("options")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("未走远程请求的下拉数据")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Array")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("remoteOptions")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("远程请求的数据")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Array")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("props")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("下拉数据格式转化 { value: 'value', label: 'label' }")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("{value,label}")])])])])],1)}),[],!1,null,null,null);e.default=s.exports}}]);