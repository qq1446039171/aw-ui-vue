<template>
  <el-card style="margin: 10px">
    <ProTable
      ref="ProTable"
      :columns="columns"
      :request="getList"
      :initParam="initParam"
      :resetInitParam="resetInitParam"
      size="small"
      :toolButton="false"
    >
      <template slot="searchForm">
        <el-form-item label="冲正状态：">
          <el-select v-model="initParam.rushStatus" clearable placeholder="请选择" style="width: 120px" size="small">
            <el-option v-for="item in rushStatusOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="结算时间:">
          <el-date-picker
            v-model="time"
            value-format="yyyy-MM-dd HH:mm:ss"
            type="datetimerange"
            range-separator="至"
            :start-placeholder="initParam.createBeginTime"
            :end-placeholder="initParam.createEndTime"
            size="small"
            :default-time="['00:00:00', '23:59:59']"
            :unlink-panels="true"
            @change="datePickerChange"
          >
          </el-date-picker>
        </el-form-item>
      </template>
      <template #operation="scope">
        <el-button type="primary" @click="reversal(scope.row.id)" icon="el-icon-edit">冲正</el-button>
      </template>
    </ProTable>
  </el-card>
</template>

<script>
import { searchErrorRequest, updateErrorRequest } from '@/api/rectification'
import ProTable from '@/components/ProTable/index.vue'

export default {
  components: {
    ProTable
  },
  data() {
    return {
      time: '',
      options: [
        {
          value: '',
          label: '全部'
        },
        {
          value: 'psnNo',
          label: '人员编号'
        },
        {
          value: 'placePointName',
          label: '门店名称'
        },
        {
          value: 'psnName',
          label: '患者姓名'
        }
      ],
      // 0：未冲正，1：已冲正, 2、冲正失败
      rushStatusOptions: [
        {
          value: '',
          label: '全部'
        },
        {
          value: '0',
          label: '未冲正'
        },
        {
          value: '1',
          label: '已冲正'
        },
        {
          value: '2',
          label: '冲正失败'
        }
      ],
      columns: [
        {
          prop: 'mdtrtId',
          label: '就诊ID',
          width: 110,
          search: true,
          fixed: 'left'
        },
        {
          prop: 'setlId',
          label: '结算ID',
          width: 110,
          search: true
        },
        {
          prop: 'omsgid',
          label: '结算凭证msgID',
          width: 220,
          labelWidth: 150,
          search: true
        },
        {
          prop: 'placePointName',
          label: '门店名称',
          width: 250
        },
        {
          prop: 'status',
          label: '网络状态',
          width: 120
        },
        {
          prop: 'rushStatus',
          label: '冲正状态',
          width: 100
        },
        {
          prop: 'createTime',
          label: '结算时间',
          width: 150
        },
        {
          prop: 'psnName',
          label: '患者姓名',
          width: 120
        },
        {
          prop: 'certNo',
          label: '身份证',
          width: 180,
          search: true
        },
        {
          prop: 'operation',
          label: '操作',
          fixed: 'right'
        }
      ],
      initParam: {
        createBeginTime: null,
        createEndTime: null,
      }
    }
  },
  created() {
    this.initParam = {
      createBeginTime: this.getBeforeDate(''),
      createEndTime: this.getBeforeDate('today')
    }
  },
  methods: {
    // 获取日期年月日
    getBeforeDate(type) {
      let date = new Date()
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = null
      if (type == 'today') {
        day = date.getDate()
      } else {
        day = date.getDate() - 1
      }
      if (month < 10) {
        month = '0' + month
      }
      if (day < 10) {
        day = '0' + day
      }
      let time = null
      if (type == 'today') {
        time = year + '-' + month + '-' + day + ' 23:59:59'
      } else {
        time = year + '-' + month + '-' + day + ' 00:00:00'
      }
      return time
    },
    getList(param) {
      return searchErrorRequest(param)
    },
    datePickerChange(val) {
      if (val) {
        this.initParam.createBeginTime = val[0]
        this.initParam.createEndTime = val[1]
      } else {
        //  清空时间
        this.initParam = {
          createBeginTime: this.getBeforeDate(''),
          createEndTime: this.getBeforeDate('today')
        }
      }
    },
    resetInitParam() {
      this.time = ''
      this.initParam = {
        createBeginTime: this.getBeforeDate(''),
        createEndTime: this.getBeforeDate('today')
      }
    },

    reversal(id) {
      let that = this
      updateErrorRequest({ id }).then((res) => {
        if (res.code == 200) {
          this.$message.success(res.msg)
          this.$refs.ProTable.getTableList()
        } else {
          this.$message.error(res.msg)
        }
      })
    }
  }
}
</script>

<style scoped></style>
