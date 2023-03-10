export default {
  template: `
<template>
  <el-card shadow="never">
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
          @click="batchDelete(scope.ids)"
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
  </el-card>
</template>

<script>
  export default {
    name: 'App',
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
            initSearchParam: '黄博文'
          },
          {
            prop: 'gender', // 关键字段
            label: '性别', // 查询条件提示词
            enum: [
              // 查询条件的枚举值
              { label: '男', value: 1 },
              { label: '女', value: 2 }
            ],
            search: true, // 是否为查询条件
            sortable: true, // 是否可排序
            searchType: 'select', // 查询类型
            placeholder: '请选择姓别', // 默认显示内容
            initSearchParam: 1, // 默认值
            inputWidth: 120 // 输入框的宽度
          },
          {
            prop: 'idCard',
            label: '身份证号',
            width: '140', //表格宽度
            search: true,
            searchType: 'select', // 查询类型
            remote: true,
            remoteFunc: 'getName',
            props: { value: 'value', label: 'label' }
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
      batchDelete(rows) {
        console.log('需要删除的对象：', rows)
      },
      deleteAccount(id) {
        console.log('查看的对象：', row)
      }
    }
  }
</script>
  `,
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
      initSearchParam: '黄博文'
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
      initSearchParam: 1, // 默认值
      inputWidth: 120 // 输入框的宽度
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
  remote: {
    getName(resolve) {
      setTimeout(() => {
        const options = [
          { value: '1', label: '身份证1' },
          { value: '2', label: '身份证2' },
          { value: '3', label: '身份证3' }
        ]
        resolve(options)
      }, 1000)
    }
  }
}
