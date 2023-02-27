<template>
  <div id="app">
    <aw-table
      :columns="columns"
      :height="600"
      :request="getUserList"
      :initParam="initParam"
      :resetInitParam="resetInitParam"
      :size="size"
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
        <el-button type="primary" icon="el-icon-circle-plus-outline" :size="size" @click="add">新增用户</el-button>
        <el-button type="primary" icon="el-icon-upload2" plain :size="size">批量添加用户</el-button>
        <el-button type="primary" icon="el-icon-download" plain :size="size">导出用户数据</el-button>
        <el-button
          type="danger"
          icon="el-icon-delete"
          plain
          :size="size"
          :disabled="!scope.isSelected"
          @click="batchDelete(scope.ids)"
        >
          批量删除用户
        </el-button>
      </template>
      <template slot="gender" slot-scope="scope">
        <div>
          {{ scope.row.gender == '1' ? '男' : '女' }}
        </div>
      </template>
      <template slot="status" slot-scope="scope">
        <div>
          {{ scope.row.status ? '开启' : '关闭' }}
        </div>
      </template>

      <!-- 表格操作 -->
      <template #operation="scope">
        <el-button type="text" @click="showDialog(scope.row)">查看</el-button>
        <el-button type="text" @click="deleteAccount(scope.row)">删除</el-button>
      </template>
    </aw-table>

    <aw-dialog title="这是一个可拖拽的" :visible.sync="visible" width="600px" >
      <template slot="header"> </template>
      <template> 需要注意的是内容是默认不居中的 </template>
      <template slot="footer">
        <el-button @click="visible = false" size="small">取 消</el-button>
        <el-button type="primary" @click="visible = true" size="small">确 定</el-button>
      </template>
    </aw-dialog>
    <Dialog ref="refDialog" />
  </div>
</template>

<script>
import Dialog from './components/Dialog.vue'
export default {
  name: 'App',
  components: {
    Dialog
  },
  data() {
    return {
      size: 'small',
      // 如果表格需要初始化请求参数,直接定义传给 ProTable(之后每次请求都会自动带上该参数，此参数更改之后也会一直带上)
      initParam: {},
      columns: [
        {
          type: 'selection',
          width: 80,
          fixed: 'left'
        },
        {
          type: 'index',
          label: '#',
          width: 80
        },
        {
          type: 'expand',
          label: 'Expand',
          width: 120
        },
        {
          prop: 'username',
          label: '用户姓名',
          search: true,
          initSearchParam: '黄博文',
          placeholder: '请输入姓名'
        },
        {
          prop: 'gender', // 关键字段
          label: '性别', // 查询条件提示词
          width: '140', //表格宽度
          enum: [
            // 查询条件的枚举值
            { label: '男', value: 1 },
            { label: '女', value: 2 }
          ],
          search: true, // 是否为查询条件
          sortable: true, // 是否可排序
          searchType: 'select', // 查询类型
          placeholder: '请选择姓别', // 默认显示内容
          initSearchParam: 1, // 默认选中的值
          inputWidth: 120, // 输入框的宽度
          turnProp: 'gender' // 需要转化的字段
        },
        {
          prop: 'idCard',
          label: '身份证号',
          search: true,
          searchType: 'select', // 查询类型
          remote: true,
          remoteFunc: 'getName',
          props: { value: 'value', label: 'label' }
        },
        // {
        //   prop: 'createTime',
        //   label: '创建时间',
        //   width: 200,
        //   sortable: true,
        //   search: true,
        //   searchType: 'daterange',
        //   initSearchParam: ['2022-04-05 00:00:00', '2022-05-10 23:59:59']
        // },
        {
          prop: 'email',
          label: '邮箱',
          search: true
        },
        {
          prop: 'address',
          label: '居住地址',
          search: true
        },
        {
          prop: 'status',
          label: '用户状态',
          sortable: true,
          width: 180
        },
        {
          prop: 'avatar',
          label: '头像',
          width: 140,
          image: true
        },
        {
          prop: 'operation',
          label: '操作',
          width: 150,
          fixed: 'right'
        }
      ],
      remoteList: {
        getName(resolve) {
          setTimeout(() => {
            const options = [
              { value: '1', label: '身份证1' },
              { value: '2', label: '身份证2' },
              { value: '3', label: '身份证3' }
            ]
            resolve(options)
          }, 1000)
        },
        funcGetToken(resolve) {
          request.get('http://tools-server.making.link/api/uptoken').then((res) => {
            resolve(res.uptoken)
          })
        }
      },
      visible: false
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
                address: '吉林省 松原市',
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
                address: '湖南 长沙市',
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
                address: '湖南 长沙市',
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
                address: '湖南 长沙市',
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
                address: '湖南 长沙市',
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
                address: '湖南 长沙市',
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
                address: '湖南 长沙市',
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
                address: '湖南 长沙市',
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
                address: '湖南 长沙市',
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
                address: '湖南 长沙市',
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
                address: '湖南 长沙市',
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
                address: '湖南 长沙市',
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
                address: '湖南 长沙市',
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
                address: '湖南 长沙市',
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
                address: '湖南 长沙市',
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
    resetInitParam() {
      this.initParam = {}
    },
    add() {
      this.visible = true
    },
    batchDelete(ids) {
      console.log('需要删除的对象id：', ids)
    },
    deleteAccount(id) {
      console.log('需要删除的对象id：', id)
    },
    showDialog(data) {
      this.$refs.refDialog.show(data)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  padding: 20px;
}
.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}
.level {
  color: #9199a1;
  margin-bottom: 8px;
}
.price {
  color: #f01414;
}
</style>
