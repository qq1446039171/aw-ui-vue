<!--
 * @Description: 首页
 * @Version: 2.0
 * @Author: 黄博文
 * @Date: 2022-04-24 20:53:16
 * @LastEditors: 黄博文
 * @LastEditTime: 2022-04-26 10:34:53
-->
<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <aw-demo /> -->
    <!-- <aw-card
      imgSrc="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdingyue.ws.126.net%2F2020%2F0515%2F465567a6j00qadpfz001cc000hs00b4c.jpg&refer=http%3A%2F%2Fdingyue.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652526457&t=7733278d88991dc2480111b439e7d507"
      summary="Node.js+Express+Koa2+开发Web Server博客"
    />
    <aw-card
      imgSrc="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdingyue.ws.126.net%2F2020%2F0515%2F465567a6j00qadpfz001cc000hs00b4c.jpg&refer=http%3A%2F%2Fdingyue.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652526457&t=7733278d88991dc2480111b439e7d507"
      summary="Node.js+Express+Koa2+开发Web Server博客"
    >
      <template slot="footer">
        <div class="footer">
          <div class="level">中级 . 523人报名</div>
          <div class="price">￥899.00</div>
        </div>
      </template>
    </aw-card>
    <aw-card
      imgSrc="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdingyue.ws.126.net%2F2020%2F0515%2F465567a6j00qadpfz001cc000hs00b4c.jpg&refer=http%3A%2F%2Fdingyue.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652526457&t=7733278d88991dc2480111b439e7d507"
      summary="Node.js+Express+Koa2+开发Web Server博客"
      :width="370"
      :imgHeight="90"
    >
      Node.js+Express+Koa2+开发Web Server博客
      <template slot="footer">
        <div class="footer">
          <div class="level">中级 . 523人报名</div>
          <div class="price">￥899.00</div>
        </div>
      </template>
    </aw-card> -->
    <!-- <aw-button>默认按2钮</aw-button>
    <aw-button type="primary" round>主要按钮</aw-button>
    <aw-button type="success" size="medium">成功按钮</aw-button>
    <aw-button type="info" size="small">信息按钮</aw-button>
    <aw-button type="warning" size="mini" round>警告按钮</aw-button>
    <aw-button type="danger">危险按钮</aw-button>

    <aw-link disabled>默认按钮</aw-link>
    <aw-link type="primary" url="/home">主要按钮</aw-link>
    <aw-link type="success">成功按钮</aw-link>
    <aw-link type="info">信息按钮</aw-link>
    <aw-link type="warning">警告按钮</aw-link>
    <aw-link type="danger">危险按钮</aw-link>
    <div style="margin-top: 50px">
      <aw-tree :treeData="treeData"></aw-tree>
    </div>
    <div style="margin-top: 50px">
      <aw-tree :treeData="treeData" type="file" @node-click="handleNodeClick"></aw-tree>
    </div>
    <aw-label required width="90px">黄博文</aw-label> -->
    <aw-table
      :columns="columns"
      :height="600"
      :request="getUserList"
      :initParam="initParam"
      :resetInitParam="resetInitParam"
      :size="size"
      ref="ProTable"
    >
      <template slot="searchForm">
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
        <el-button type="text" @click="deleteAccount(scope.row)">查看</el-button>
        <el-button type="text">删除</el-button>
      </template>
    </aw-table>
  </div>
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
          search: true
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
          searchType: 'select' // 查询类型
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
          prop: 'idCard',
          label: '身份证号',
          search: true
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
      treeData: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1'
                }
              ]
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1',
                  children: [
                    {
                      label: '二级 3-1',
                      children: [
                        {
                          label: '三级 3-1-1'
                        }
                      ]
                    },
                    {
                      label: '二级 3-2',
                      children: [
                        {
                          label: '三级 3-2-1'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleNodeClick(node) {
      console.log(node)
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
