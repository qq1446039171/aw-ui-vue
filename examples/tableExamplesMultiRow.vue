<template>
  <div class="template-view">
    <!--工具栏-->
    <div class="head-container">
      <div class="head-search">
        <el-select v-model="query.state" placeholder="请选择" style="width: 120px" :size="size">
          <el-option v-for="item in query.stateOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="query.grade" placeholder="请选择" style="width: 120px" :size="size">
          <el-option v-for="item in query.gradeOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>

        <!-- 搜索 -->
        <el-input
          v-model="query.keyword"
          clearable
          placeholder="昵称/姓名/手机号"
          style="width: 200px"
          class="filter-item"
          @keyup.enter.native="fetchList"
          :size="size"
        />
      </div>
      <el-button :size="size" type="success" icon="el-icon-search" @click="fetchList">搜索</el-button>
      <!-- 新增 -->
      <el-button :size="size" type="danger" icon="el-icon-refresh" @click="fetchList">刷新</el-button>
    </div>
    <el-table :data="tableData" border size="medium" max-height="calc(100vh - 21rem)" class="template-table">
      <el-table-column prop="date" label="日期" align="center" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" align="center" width="180"> </el-table-column>
      <el-table-column prop="address" align="center" label="地址"> </el-table-column>
      <el-table-column prop="proName" align="center" label="子商品名称" width="200" class="last-column">
        <template slot-scope="scope">
          <div class="column-more">
            <el-row class="row" v-for="(item, index) in scope.row.subList" :key="index">
              {{ item.name }}
            </el-row>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <div class="table-pagination">
      <el-pagination
        :total="100"
        :currentPage="query.pageNum"
        :pageSize="query.pageSize"
        :background="true"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="sizeChange"
        @current-change="pageChange"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'manager',
    components: {
      // MaterialList
    },
    data() {
      return {
        size: 'small',
        query: {
          stateOptions: [
            {
              value: '选项1',
              label: '黄金糕'
            },
            {
              value: '选项2',
              label: '双皮奶'
            },
            {
              value: '选项3',
              label: '蚵仔煎'
            },
            {
              value: '选项4',
              label: '龙须面'
            },
            {
              value: '选项5',
              label: '北京烤鸭'
            }
          ], // 状态列表
          state: '', // 状态
          gradeOptions: [
            {
              value: '选项1',
              label: '黄金糕'
            },
            {
              value: '选项2',
              label: '双皮奶'
            },
            {
              value: '选项3',
              label: '蚵仔煎'
            },
            {
              value: '选项4',
              label: '龙须面'
            },
            {
              value: '选项5',
              label: '北京烤鸭'
            }
          ], // 等级列表
          grade: '',
          keyword: '',
          time: [],
          pageNum: 1,
          pageSize: 10
        },
        pageable: {},
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            subList: [{ name: '尼莫地平片' }, { name: '通心络胶囊' }, { name: '通宣理肺丸' }]
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
            subList: [{ name: '尼莫地平片' }, { name: '通心络胶囊' }, { name: '通宣理肺丸' }]
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            subList: [{ name: '尼莫地平片' }, { name: '通心络胶囊' }, { name: '通宣理肺丸' }]
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            subList: [{ name: '尼莫地平片' }, { name: '通心络胶囊' }, { name: '通宣理肺丸' }]
          }
        ]
      }
    },
    mounted() {
      this.fetchList()
    },
    methods: {
      fetchList() {},
      sizeChange(val) {
        this.query.pageSize = val
        this.fetchList()
      },
      pageChange(val) {
        this.query.pageNum = val
        this.fetchList()
      }
    }
  }
</script>

<style scoped lang="scss">
  .template-view {
    padding: 20px 20px 45px 20px;
    height: 100%;

    .head-container {
      display: flex;
      margin-bottom: 15px;

      .head-search {
        display: flex;
        margin-right: 10px;
        gap: 10px;
      }
    }
    .template-table {
      ::v-deep .cell {
        padding: 0;
      }
      ::v-deep .el-table__row {
        td {
          padding: 0;
        }
      }

      .column-more {
        .row {
          line-height: 40px;
          border-bottom: 1px solid rgb(228, 225, 225);
          &:nth-last-child(1) {
            border: none;
          }
        }
      }
    }
    .table-pagination {
      display: flex;
      margin: 23px 0 10px 0;
      justify-content: flex-end;
    }
  }

  .mar_right_20 {
    margin-right: 20px;
  }
  .mar_right_10 {
    margin-right: 10px;
  }

  .flex_align_center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text_red {
    color: #ff0084;
  }
  .text_green {
    color: #13ce66;
  }
  .text_blue {
    color: #169bd5;
    cursor: pointer;
  }
</style>
