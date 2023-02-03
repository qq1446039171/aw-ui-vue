import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
Vue.use(ElementUI)
import AwTable from './index.vue'

export default {
  title: 'Table/Table',
  component: AwTable,
  argTypes: {
    // size: { control: { type: String }, description: '组件的大小' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: '组件的大小'
    },
    columns: { description: '表单配置项' },
    remote: { description: '初始化请求参数' },
    initParam: { description: '初始化请求参数' },
    toolButton: { description: '是否显示表格功能按钮' },
    resetInitParam: { description: '重置initParam方法' },
    request: { description: '请求表单数据方法' },
    border: { description: '是否显示表格边框' },
    pagination: { description: '是否需要分页组件' },
    height: { description: '表格最大高度' },
    isShowSearch: { description: '是否显示查询条件' },
    pageSizes: { description: '分页大小' },
    labelWidth: { description: '表单域标签的宽度' },
    tag: { description: '表格数据特殊标识符' },
    searchFormBefore: { description: '查询条件中 前置插槽' },
    searchFormAfter: { description: '查询条件中 后置插槽' },
    searchButton: { description: '查询条件中 后置按钮插槽' },
    tableHeader: { description: '表格上方自定义插槽' },
    'item.prop': { description: '自定义插槽（columns中每项的prop就是插槽名称）' }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AwTable },
  template: `
  <el-card shadow="never">
    <aw-table
        :columns="columns"
        :height="height"
        :request="getUserList"
        :initParam="initParam"
        :resetInitParam="resetInitParam"
        :size="size"
        :remote="remote"
        ref="AwTable"
        tag="id"
        v-bind="$props" 
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
    </el-card>
`,
  Data() {
    return {
      size: 'small',
      // 如果表格需要初始化请求参数,直接定义传给 AwTable(之后每次请求都会自动带上该参数，此参数更改之后也会一直带上)
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
      }
    }
  },
  Methods: {
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
              }
            ],
            pageNum: 1,
            pageSize: 10,
            total: 3
          })
        }, 300)
      })
    },
    resetInitParam() {
      this.initParam = {}
    },
    deleteAccount(id) {
      console.log('需要删除的对象id：', id)
    },
    batchDelete(ids) {
      console.log('需要删除的对象id：', ids)
    }
  }
})

export const Table = Template.bind()
Table.args = {
  size: 'small',
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
    },
    funcGetToken(resolve) {
      request.get('http://tools-server.making.link/api/uptoken').then((res) => {
        resolve(res.uptoken)
      })
    }
  },
  // 如果表格需要初始化请求参数,直接定义传给 AwTable(之后每次请求都会自动带上该参数，此参数更改之后也会一直带上)
  initParam: {},
  toolButton: true,
  border: false,
  pagination: true,
  isShowSearch: true,
  tag: 'id',
  labelWidth: 100,
  pageSizes: [10, 50, 100, 200],
  height: 575,

  resetInitParam() {
    this.initParam = {}
  },
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
            }
          ],
          pageNum: 1,
          pageSize: 10,
          total: 3
        })
      }, 300)
    })
  }
}
