<template>
  <el-card shadow="never">
    <aw-table
      :columns="columns"
      :remote="remote"
      :height="600"
      :request="getUserList"
      :initParam="initParam"
      :resetInitParam="resetInitParam"
      :toolButton="false"
      :size="size"
      :searchTitle="false"
      tag="id"
      ref="ProTable"
    >
      <template slot="searchFormBefore">
        <el-form-item label="">
          <el-select
            v-model="query.type"
            clearable
            placeholder="搜索条件"
            style="width: 110px; margin: 0 5px"
            :size="size"
          >
            <el-option v-for="item in options.queryType" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
          <!-- 搜索 -->
          <el-input
            v-model="query.value"
            clearable
            placeholder="输入搜索内容"
            style="width: 150px; margin: 0 5px"
            :size="size"
            @keyup.enter.native="toQuery"
          />
        </el-form-item>
      </template>
      <template slot="searchForm">
        <el-select
          v-model="timeType"
          clearable
          placeholder="时间筛选"
          style="width: 110px; margin-right: 10px"
          :size="size"
        >
          <el-option v-for="(item, index) in options.time" :key="index" :value="item.value" :label="item.label" />
        </el-select>
        <el-date-picker
          v-model="middleTime"
          value-format="yyyy-MM-dd HH:mm:ss"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="['00:00:00', '23:59:59']"
          :size="size"
        >
        </el-date-picker>
        <!-- <el-date-picker
          v-model="initParam.createTime"
          type="date"
          style="width: 140px; margin-right: 10px"
          placeholder="选择日期"
          :size="size"
        >
        </el-date-picker> -->
      </template>
      <template slot="patientName" slot-scope="scope">
        <el-button size="mini" type="text" @click="patientDetailBtn(scope.row.patientId)">
          {{ scope.row.patientName ? scope.row.patientName : '' }}</el-button
        >
      </template>

      <!-- 表格操作 -->
      <!-- <template #operation="scope">
        <el-button type="text" @click="deleteAccount(scope.row)">查看</el-button>
        <el-button type="text" @click="deleteAccount(scope.row)">删除</el-button>
      </template> -->
    </aw-table>
    <!-- 用户信息 -->
  </el-card>
</template>

<script>
import awTable from '@/components/ProTable'
import Table from './tableExamplesQuery2.js'
import { GetListNote } from '@/api/DTP/serveManagement/note.js'
export default {
  name: 'serveManagementNote',
  components: {
    awTable
  },
  data() {
    return {
      size: 'small',
      // 如果表格需要初始化请求参数,直接定义传给 ProTable(之后每次请求都会自动带上该参数，此参数更改之后也会一直带上)
      initParam: {},
      columns: Table.Columns,
      remote: Table.Remote,
      //  辅助参数
      query: {
        type: '',
        value: ''
      },
      options: {
        queryType: [
          { value: 'patientName', label: '客户姓名' },
          { value: 'drugName', label: '药品名称' },
          { value: 'orderId', label: '订单号' }
        ],
        time: [
          { value: ['realSendTimeStart', 'realSendTimeEnd'], label: '创建日期' },
          { value: ['createTimeStart', 'createTimeEnd'], label: '预计自提时间' },
          { value: ['finishTimeStart', 'finishTimeEnd'], label: '完成时间' }
        ]
      },
      timeType: null, //选择的时间类型
      middleTime: null // 过度用的time
    }
  },
  methods: {
    getUserList(param) {
      let middleParam = {}
      const type = this.query.type
      const value = this.query.value
      if (type && value) {
        middleParam[type] = value
      }
      if (this.timeType && this.middleTime) {
        middleParam[this.timeType[0]] = this.middleTime[0]
        middleParam[this.timeType[1]] = this.middleTime[1]
      }
      let data = {
        ...middleParam,
        ...param
      }
      console.log('查询条件')
      console.log(data)
      return GetListNote(data)
    },
    resetInitParam() {
      this.initParam = {}
      this.query = {
        type: '',
        value: ''
      }
      this.timeType = null
      this.middleTime = null // 过度用的time
    },
    batchDelete(ids) {
      console.log('需要删除的对象id：', ids)
    },
    deleteAccount(id) {
      console.log('需要删除的对象id：', id)
    },
    // 患者信息弹窗
    patientDetailBtn(row) {
      this.$refs.patientDetail.dialogVisible = true
      this.$refs.patientDetail.getPatientDetail(row)
    }
  }
}
</script>

<style></style>
