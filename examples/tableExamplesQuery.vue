<template>
  <el-card style="margin: 10px">
    <ProTable
      ref="ProTable"
      :columns="columns"
      :request="getUserList"
      :initParam="initParam"
      :resetInitParam="resetInitParam"
      size="small"
      :toolButton="false"
    >
      <template slot="searchForm">
        <el-select v-model="query.type" clearable placeholder="请选择" style="width: 180px">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
        <el-input v-model="query.value" placeholder="请输入内容" clearable style="width: 280px"></el-input>
      </template>
      <!-- <template slot="searchButton" slot-scope="scope"> -->
      <template slot="tableHeader" slot-scope="scope">
        <el-button type="primary" icon="el-icon-circle-plus-outline" size="small" @click="goAddProduct"
          >新增产品</el-button
        >
        <el-button
          type="danger"
          icon="el-icon-delete"
          plain
          size="small"
          :disabled="!scope.isSelected"
          @click="deleteProduct(scope.ids)"
        >
          批量删除用户
        </el-button>
      </template>
      <template slot="stopTime" slot-scope="scope">
        <div>{{ formatTimeTwo(scope.row.startTime) }}</div>
        <div>{{ formatTimeTwo(scope.row.stopTime) }}</div>
      </template>
      <template #operation="scope">
        <el-button type="primary" @click="goUpdateProduct(scope.row.id)" icon="el-icon-edit">编辑</el-button>
        <el-button type="danger" icon="el-icon-delete" @click="deleteProduct(scope.row.id)">删除</el-button>

        <el-button type="text">查看门店</el-button>
      </template>
    </ProTable>
  </el-card>
</template>

<script>
import { getSeckillList, del } from '@/api/yxStoreSeckill'
import ProTable from '@/components/ProTable/index.vue'
import { formatTimeTwo } from '@/utils/index'
export default {
  components: {
    ProTable
  },
  data() {
    return {
      options: [
        {
          value: '',
          label: '全部'
        },
        {
          value: 'productId',
          label: '商品ID'
        },
        {
          value: 'productName',
          label: '商品名称'
        },
        {
          value: 'storeName',
          label: '门店名称'
        }
      ],
      columns: [
        {
          type: 'selection',
          width: 80,
          fixed: 'left' // 固定列
        },
        {
          prop: 'id',
          label: 'id',
          width: 80
        },
        {
          prop: 'productId',
          label: '商品ID',
          width: 80
        },
        {
          prop: 'productName',
          label: '商品名称',
          width: 120
        },
        {
          prop: 'image',
          label: '产品主图',
          width: 140,
          image: true
        },
        {
          prop: 'price',
          label: '秒杀价',
          width: 100
        },
        {
          prop: 'otPrice',
          label: '原价',
          width: 100
        },
        {
          prop: 'stock',
          label: '库存',
          width: 120
        },
        {
          prop: 'sales',
          label: '销量',
          width: 100
        },
        {
          prop: 'num',
          label: '限购',
          width: 100
        },
        {
          prop: 'statusStr',
          label: '秒杀状态',
          width: 120
        },
        {
          prop: 'stopTime',
          label: '秒杀时间',
          width: 210
        },
        {
          prop: 'operation',
          label: '操作',
          fixed: 'right',
          width: 300
        }
      ],
      initParam: {},
      //  辅助参数
      query: {
        type: '',
        value: ''
      },
      params: {}
    }
  },
  methods: {
    formatTimeTwo,
    getUserList(param) {
      this.params = {}
      const type = this.query.type
      const value = this.query.value
      if (type && value) {
        this.params[type] = value
      }
      let data = {
        ...this.params,
        ...param
      }
      return getSeckillList(data)
    },
    resetInitParam() {
      this.initParam = {}
      ;(this.query = {
        type: '',
        value: ''
      }),
        (this.params = {})
    },

    goAddProduct() {
      this.$router.push({ path: '/activity/secKillAdd' })
    },
    goUpdateProduct(id) {
      this.$router.push({ path: '/activity/secKillEdit/' + id })
    },
    deleteProduct(id) {
      this.$confirm('此操作将删除该商品, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          let data = Array.isArray(id) ? id : [id]
          // 判断id是数组不
          del({ ids: data })
            .then((res) => {
              this.$refs.ProTable.refresh()
              this.$notify({
                title: '删除成功',
                type: 'success',
                duration: 2500
              })
            })
            .catch((err) => {
              console.log(err.response.data.message)
            })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    }
  }
}
</script>

<style scoped></style>
