<template>
  <div class="aw-table">
    <!-- 查询表单 -->
    <!--     v-if="searchParam" 为什么不要这个呢因为有时我不需要columns中的搜索栏-->
    <SearchForm
      v-show="isShowSearch"
      :columns="searchColumns"
      :searchParam="searchParam"
      :labelWidth="labelWidth"
      :search="search"
      :reset="reset"
      :size="size"
    >
      <!--  查询条件中 前置插槽 -->
      <template slot="searchForm">
        <slot name="searchForm"></slot>
      </template>
      <!--  查询条件中 后置插槽 -->
      <template slot="searchButton">
        <slot name="searchButton" :list="selectedData" :isSelected="isSelected"></slot>
      </template>
    </SearchForm>
    <!-- 表格头部 操作按钮 -->
    <div class="aw-table-header">
      <div class="header-button-lf">
        <slot name="tableHeader" :list="selectedData" :isSelected="isSelected"></slot>
      </div>
      <div class="header-button-ri" v-if="toolButton">
        <el-button icon="el-icon-refresh" circle @click="getTableList" :size="size"> </el-button>
        <!-- <el-button icon="el-icon-s-operation" circle :size="size"> </el-button> -->
        <el-button
          type="primary"
          icon="el-icon-search"
          :size="size"
          v-if="searchColumns.length"
          @click="isShowSearch = !isShowSearch"
          circle
        ></el-button>
      </div>
    </div>
    <!-- 表格主体 -->
    <el-table
      :max-height="height"
      ref="tableRef"
      :data="tableData"
      :border="border"
      :highlight-current-row="true"
      :row-key="getRowKeys"
      v-loading="loading"
      @selection-change="selectionChange"
    >
      <div v-for="(item, index) in tableColumns" :key="index">
        <el-table-column
          v-if="item.type == 'selection'"
          :type="item.type"
          :reserve-selection="item.type == 'selection'"
          :label="item.label"
          :width="item.width"
          :fixed="item.fixed"
          :align="item.align ? item.align : 'center'"
        >
        </el-table-column>
        <el-table-column
          v-if="item.type == 'index'"
          :type="item.type"
          :label="item.label"
          :width="item.width"
          :fixed="item.fixed"
          :align="item.align ? item.align : 'center'"
        >
        </el-table-column>
        <el-table-column
          v-if="item.prop && !item.type"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :sortable="item.sortable"
          :show-overflow-tooltip="true"
          :resizable="true"
          :fixed="item.fixed"
          :align="item.align ? item.align : 'center'"
          v-slot="scope"
        >
          <template :scope="scope.row">
            <!-- 自定义配置每一列 slot（作用域插槽） -->
            <slot :name="item.prop" :row="scope.row">
              <el-image
                v-if="item.image"
                :src="scope.row[item.prop]"
                :preview-src-list="[scope.row[item.prop]]"
                fit="cover"
                class="aw-table-image"
                preview-teleported
              />

              <div v-else>
                {{ scope.row[item.prop] }}
              </div>
            </slot>
          </template>
        </el-table-column>
      </div>
    </el-table>
    <!-- 分页 -->
    <Pagination
      v-if="pagination"
      :pageable="pageable"
      :pageSizes="pageSizes"
      :handleSizeChange="handleSizeChange"
      :handleCurrentChange="handleCurrentChange"
      class="aw-table-pagination"
    ></Pagination>
  </div>
</template>

<script>
import SearchForm from './components/SearchForm/index.vue'
import Pagination from './components/Pagination.vue'
export default {
  name: 'aw-table',
  components: { SearchForm, Pagination },
  props: {
    // 列配置项
    columns: {
      type: Array,
      default: () => {
        ;[]
      }
    },
    // 初始化请求参数 ==> 非必传（默认为{}）
    initParam: {
      type: Object,
      default: () => {}
    },
    //  请求表数据方法
    request: {
      type: Function,
      default: () => {}
    },
    // 重置initParam方法
    resetInitParam: {
      type: Function,
      default: () => {}
    },
    // 是否显示表格功能按钮 ==> 非必传（默认为true）
    toolButton: {
      type: Boolean,
      default: true
    },
    // 按钮大小
    size: {
      type: String,
      default: 'small'
    },
    //  表格边框 ==> 非必传（默认为true）
    border: {
      type: Boolean,
      default: true
    },
    // 是否需要分页组件 ==> 非必传（默认为true）
    pagination: {
      type: Boolean,
      default: true
    },
    // 表格高度
    height: {
      type: Number,
      default: 575
    },
    // 是否显示查询条件
    isShowSearch: {
      type: Boolean,
      default: true
    },
    //  分页大小
    pageSizes: {
      default: () => [10, 50, 100, 200],
      type: Array
    },
    // 表单域标签的宽度
    labelWidth: {
      type: Number,
      default: 100
    },
    //  表格数据特殊标识符
    tag: {
      type: String,
      default: 'id'
    }
  },
  data() {
    return {
      // 表格数据
      tableData: [],
      // 分页数据
      pageable: {
        // 当前页数
        pageNum: 1,
        // 每页显示条数
        pageSize: 10,
        // 总条数
        total: 0
      },
      // 查询参数(只包括查询)
      searchParam: {},
      // 初始化默认的查询参数
      initSearchParam: {},
      // 总参数(包含分页和查询参数)
      totalParam: {},
      loading: true,
      // 是否选中数据
      isSelected: false,
      // 选中的数据列表
      selectedList: []
    }
  },
  created() {
    // 设置搜索表单的默认值
    this.searchColumns.forEach((column) => {
      if (column.initSearchParam !== undefined && column.initSearchParam !== null) {
        // this.initSearchParam[column.prop] = column.initSearchParam
        // this.searchParam[column.prop] = column.initSearchParam || ''
        this.$set(this.initSearchParam, column.prop, column.initSearchParam)
        this.$set(this.searchParam, column.prop, column.initSearchParam || '')
      }
    })
  },
  computed: {
    searchColumns() {
      return this.columns.filter((item) => item.search)
    },
    tableColumns() {
      return this.columns.map((item) => {
        return {
          ...item,
          isShow: true
        }
      })
    },
    pageParam() {
      return {
        pageNum: this.pageable.pageNum,
        pageSize: this.pageable.pageSize
      }
    },
    selectedData() {
      return this.selectedList.map((item) => item)
    }
  },
  mounted() {
    // 获取表格数据
    this.getTableList()
  },
  methods: {
    /**
     * @description 获取表格数据
     * @return void
     * */
    async getTableList() {
      try {
        this.loading = true
        // 更新查询参数
        this.updatedTotalParam()
        Object.assign(this.totalParam, this.initParam)
        console.log('查询条件:', this.totalParam)
        const data = await this.request(this.totalParam)
        this.loading = false
        // 解构后台返回的分页数据(如果有分页更新分页信息)
        let medium = data.data ? data.data : data

        const { pageNum, pageSize, total, rows } = medium

        //  从后端拿数据
        this.tableData = rows || []
        //  假如后端未返回 page  size 。那我们只需要总条数就可以了
        this.updatePageable({ total })
      } catch (error) {
        this.loading = false
        this.tableData = []
        console.log(error)
      }
    },
    /**
     * @description 更新查询参数
     * @param resPageable 后台返回的分页数据
     * @return void
     * */
    updatedTotalParam() {
      this.totalParam = {}
      let nowSearchParam = {}
      // 防止手动清空输入框携带参数（可以自定义查询参数前缀）
      for (let key in this.searchParam) {
        // * 某些情况下参数为 false/0 也应该携带参数
        if (this.searchParam[key] || this.searchParam[key] === false || this.searchParam[key] === 0) {
          nowSearchParam[key] = this.searchParam[key]
        }
      }
      Object.assign(this.totalParam, nowSearchParam, this.pageParam)
    },
    /**
     * @description 更新分页信息
     * @param resPageable 后台返回的分页数据
     * @return void
     * */
    updatePageable(resPageable) {
      Object.assign(this.pageable, resPageable)
    },
    /**
     * @description 表格数据查询
     * @return void
     * */
    search() {
      this.pageable.pageNum = 1
      this.getTableList()
    },

    /**
     * @description 表格数据重置
     * @return void
     * */
    async reset() {
      this.pageable.pageNum = 1
      this.searchParam = {}
      await this.resetInitParam()
      // 重置搜索表单的时，如果有默认搜索参数，则重置默认的搜索参数
      Object.keys(this.initSearchParam).forEach((key) => {
        // this.searchParam[key] = this.initSearchParam[key]  vue2对对象跟数组里面新增的属性劫持不到
        this.$set(this.searchParam, key, this.initSearchParam[key])
      })
      this.getTableList()
    },
    /**
     * @description 表格数据刷新 普遍用于表格数据改变后更新的操作
     * @return void
     * */
    async refresh() {
      this.pageable.pageNum = 1
      this.searchParam = {}
      await this.resetInitParam()
      // 重置搜索表单的时，如果有默认搜索参数，则重置默认的搜索参数
      Object.keys(this.initSearchParam).forEach((key) => {
        // this.searchParam[key] = this.initSearchParam[key]  vue2对对象跟数组里面新增的属性劫持不到
        this.$set(this.searchParam, key, this.initSearchParam[key])
      })
      this.getTableList()
    },
    /**
     * @description 每页条数改变
     * @param val 当前条数
     * @return void
     * */
    handleSizeChange(number) {
      this.pageable.pageNum = 1
      this.pageable.pageSize = number
      this.getTableList()
    },

    /**
     * @description 当前页改变
     * @param val 当前页
     * @return void
     * */
    handleCurrentChange(number) {
      this.pageable.pageNum = number
      this.getTableList()
    },

    /**
     * @description 多选操作
     * @param {Array} rowArr 当前选择的所有数据
     * @return void
     */
    selectionChange(rowArr) {
      rowArr.length === 0 ? (this.isSelected = false) : (this.isSelected = true)
      this.selectedList = rowArr
    },
    // 获取行数据的 Key,用来优化 Table 的渲染;在使用跨页多选时,该属性是必填的
    getRowKeys(row) {
      return row[this.tag]
    }
  }
}
</script>
