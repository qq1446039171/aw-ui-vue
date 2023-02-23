# Table 表格

<script>
import tableTemplate from './table-template.js';
export default {
  name: 'Table',
  data() {
    return {
      size:"small",
      // 如果表格需要初始化请求参数,直接定义传给 ProTable(之后每次请求都会自动带上该参数，此参数更改之后也会一直带上)
      initParam: {},
      columns: tableTemplate.columns,
      remoteList: tableTemplate.remote,
      template:tableTemplate.template
    }
  },
  methods: {
    getUserList() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            rows: [
              {
                id: '1',
                username: '侯秀英',
                gender: 1,
                age: 30,
                idCard: '05763240829223234475',
                email: 'v.wydgaw@xvfa.ch',
                createTime: '1983-10-30 20:07:53',
                status: 1,
                avatar: 'http://dummyimage.com/100x100/79f2b8&text=梁刚'
              },
              {
                id: '2',
                username: '黄博文',
                gender: 2,
                age: 22,
                idCard: '05763240829223234475',
                email: 'v.wydgaw@xvfa.ch',
                createTime: '1983-10-30 20:07:53',
                status: 2,
                avatar: 'http://dummyimage.com/100x100/79f2b8&text=梁刚'
              },
              {
                id: '3',
                username: '黄博文',
                gender: 2,
                age: 22,
                idCard: '05763240829223234475',
                email: 'v.wydgaw@xvfa.ch',
                createTime: '1983-10-30 20:07:53',
                status: 2,
                avatar: 'http://dummyimage.com/100x100/79f2b8&text=梁刚'
              },
              {
                id: '4',
                username: '黄博文',
                gender: 2,
                age: 22,
                idCard: '05763240829223234475',
                email: 'v.wydgaw@xvfa.ch',
                createTime: '1983-10-30 20:07:53',
                status: 2,
                avatar: 'http://dummyimage.com/100x100/79f2b8&text=梁刚'
              },
              {
                id: '5',
                username: '黄博文',
                gender: 2,
                age: 22,
                idCard: '05763240829223234475',
                email: 'v.wydgaw@xvfa.ch',
                createTime: '1983-10-30 20:07:53',
                status: 2,
                avatar: 'http://dummyimage.com/100x100/79f2b8&text=梁刚'
              },
              {
                id: '6',
                username: '黄博文',
                gender: 2,
                age: 22,
                idCard: '05763240829223234475',
                email: 'v.wydgaw@xvfa.ch',
                createTime: '1983-10-30 20:07:53',
                status: 2,
                avatar: 'http://dummyimage.com/100x100/79f2b8&text=梁刚'
              },
              {
                id: '7',
                username: '黄博文',
                gender: 2,
                age: 22,
                idCard: '05763240829223234475',
                email: 'v.wydgaw@xvfa.ch',
                createTime: '1983-10-30 20:07:53',
                status: 2,
                avatar: 'http://dummyimage.com/100x100/79f2b8&text=梁刚'
              },
              {
                id: '8',
                username: '黄博文',
                gender: 2,
                age: 22,
                idCard: '05763240829223234475',
                email: 'v.wydgaw@xvfa.ch',
                createTime: '1983-10-30 20:07:53',
                status: 2,
                avatar: 'http://dummyimage.com/100x100/79f2b8&text=梁刚'
              },
              {
                id: '9',
                username: '黄博文',
                gender: 2,
                age: 22,
                idCard: '05763240829223234475',
                email: 'v.wydgaw@xvfa.ch',
                createTime: '1983-10-30 20:07:53',
                status: 2,
                avatar: 'http://dummyimage.com/100x100/79f2b8&text=梁刚'
              },
              {
                id: '10',
                username: '黄博文',
                gender: 2,
                age: 22,
                idCard: '05763240829223234475',
                email: 'v.wydgaw@xvfa.ch',
                createTime: '1983-10-30 20:07:53',
                status: 2,
                avatar: 'http://dummyimage.com/100x100/79f2b8&text=梁刚'
              },
              {
                id: '11',
                username: '黄博文',
                gender: 2,
                age: 22,
                idCard: '05763240829223234475',
                email: 'v.wydgaw@xvfa.ch',
                createTime: '1983-10-30 20:07:53',
                status: 2,
                avatar: 'http://dummyimage.com/100x100/79f2b8&text=梁刚'
              },
              {
                id: '12',
                username: '黄博文',
                gender: 2,
                age: 22,
                idCard: '05763240829223234475',
                email: 'v.wydgaw@xvfa.ch',
                createTime: '1983-10-30 20:07:53',
                status: 2,
                avatar: 'http://dummyimage.com/100x100/79f2b8&text=梁刚'
              },
              {
                id: '13',
                username: '黄博文',
                gender: 2,
                age: 22,
                idCard: '05763240829223234475',
                email: 'v.wydgaw@xvfa.ch',
                createTime: '1983-10-30 20:07:53',
                status: 2,
                avatar: 'http://dummyimage.com/100x100/79f2b8&text=梁刚'
              },
              {
                id: '14',
                username: '黄博文',
                gender: 2,
                age: 22,
                idCard: '05763240829223234475',
                email: 'v.wydgaw@xvfa.ch',
                createTime: '1983-10-30 20:07:53',
                status: 2,
                avatar: 'http://dummyimage.com/100x100/79f2b8&text=梁刚'
              },
              {
                id: '15',
                username: '黄博文',
                gender: 2,
                age: 22,
                idCard: '05763240829223234475',
                email: 'v.wydgaw@xvfa.ch',
                createTime: '1983-10-30 20:07:53',
                status: 2,
                avatar: 'http://dummyimage.com/100x100/79f2b8&text=梁刚'
              }
            ],
            pageNum: 1,
            pageSize: 10,
            total: 15
          })
        }, 300)
      })
    },
    resetInitParam(){
      this.initParam = {}
    },
    batchDelete(rows) {
      console.log('需要删除的对象id：', rows)
    },
    deleteAccount(row) {
      console.log('查看的对象：', row)
    }
  }
}
</script>
<br/>

<demo name="基础用法" info="基础的标签用法。" :code='template'>
  <template v-slot:container>
    <aw-table
      :columns="columns"
      :height="600"
      :request="getUserList"
      :initParam="initParam"
      :resetInitParam="resetInitParam"
      :size="size"
      tag="id"
      :remote="remoteList"
      ref="ProTable"
  >
    <template slot="searchFormAfter">
      <el-form-item label="结算时间:">
         <el-date-picker
            v-model="initParam.createTime"
            value-format="yyyy-MM-dd"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :size="size"
          >
          </el-date-picker>
      </el-form-item>
    </template>
    <template slot="tableHeader" slot-scope="scope">
      <el-button type="primary" icon="el-icon-circle-plus-outline" :size="size">新增用户</el-button>
      <el-button type="primary" icon="el-icon-upload2" plain :size="size">批量添加用户</el-button>
      <el-button type="primary" icon="el-icon-download" plain :size="size">导出用户数据</el-button>
      <el-button
        type="danger"
        icon="el-icon-delete"
        plain
        :size="size"
        :disabled="!scope.isSelected"
        @click="batchDelete(scope)"
      >
        批量删除用户
      </el-button>
    </template>
    <template slot="gender" slot-scope="scope">
      <div>{{ scope.row.gender == '1' ? '男' : '女' }}</div>
    </template>
    <template slot="status" slot-scope="scope">
      <div>{{ scope.row.status ? '开启' : '关闭' }}</div>
    </template>
    <!-- 表格操作 -->
    <template #operation="scope">
      <el-button type="text" @click="deleteAccount(scope.row)">查看</el-button>
      <el-button type="text" @click="deleteAccount(scope.row)">删除</el-button>
    </template>
  </aw-table>
  </template>
</demo>

### Attributes

| 属性           | 说明                                                      | 类型     | 默认值             | 可选值                |
| :------------- | :-------------------------------------------------------- | :------- | :----------------- | :-------------------- |
| columns        | 列配置项(包含 table 中的 columns 与 搜索栏中的字段 )      | Object   | -                  | - 必填                |
| request        | 请求表数据方法                                            | Function | -                  | - 必填                |
| initParam      | 初始化请求参数                                            | Object   | -                  | -                     |
| resetInitParam | 重置 initParam 方法(主要用于搜索栏中时间选择中字段的重置) | Function | -                  | -                     |
| toolButton     | 是否显示表格功能按钮(刷新以及显示隐藏搜索栏)              | Boolean  | true               | true / false          |
| size           | 整个页面中 Element 组件的大小                             | string   | small              | medium / small / mini |
| border         | 表格边框                                                  | Boolean  | true               | true / false          |
| pagination     | 是否需要分页组件                                          | Boolean  | true               | true / false          |
| height         | 表格高度（超出此高度 Table 会滚动）                       | Number   | -                  | -                     |
| isShowSearch   | 是否显示查询条件                                          | Boolean  | true               | -                     |
| pageSizes      | 分页大小                                                  | Array    | [10, 50, 100, 200] | -                     |
| labelWidth     | 表单域标签的宽度                                          | Number   | 100                | -                     |
| tag            | 表格数据唯一标识符                                        | String   | id                 | -                     |
| remote         | 远程请求接口列表集合                                      | Object   | -                  | -                     |

### Slots

| 事件                                  | 说明                                           |
| :------------------------------------ | :--------------------------------------------- |
| searchFormBefore                      | 查询条件中 前置输入框插槽                      |
| searchFormAfter                       | 搜索栏尾部内容                                 |
| searchButton                          | 查询条件中 后置按钮插槽                        |
| tableHeader                           | 表格头部 操作按钮                              |
| columns 中的每一个 prop 对应一个 slot | 自定义配置每一列 slot(值的意思 请看 HTML 代码) |
