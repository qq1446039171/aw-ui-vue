import { GetAllNoteCreateBy } from '@/api/DTP/serveManagement/note.js'

let Table = {
  Columns: [
    {
      prop: 'patientName',
      label: '患者姓名',
      width: '120', //表格宽度
      fixed: 'left'
    },
    {
      prop: 'patientPhone',
      label: '患者手机号',
      width: '120' //表格宽度
    },
    {
      prop: 'drugName',
      label: '商品名称',
      width: '120' //表格宽度
    },
    {
      prop: 'diagnosis',
      label: '诊断结果',
      width: '120' //表格宽度
    },
    {
      prop: 'noteTypeName', // 关键字段
      label: '短信类型', // 查询条件提示词
      width: '130', //表格宽度
      enum: [
        // 查询条件的枚举值
        { label: '随访短信', value: 1 },
        { label: '提醒短信', value: 2 }
      ],
      searchType: 'select', // 查询类型
      placeholder: '短信类型',
      inputWidth: 120,
      initSearchParam: '' // 默认值
    },
    {
      prop: 'noteOperatorName', // 关键字段
      label: '短信运营商', // 查询条件提示词
      width: '130', //表格宽度
      enum: [
        // 查询条件的枚举值
        { label: '阿里云', value: 1 },
        { label: '腾讯云', value: 2 },
        { label: '华为云', value: 3 },
        { label: '宣翼通', value: 4 }
      ],

      searchType: 'select', // 查询类型
      placeholder: '短信运营商',
      inputWidth: 120
    },
    // 短信内容
    {
      prop: 'noteContent',
      label: '短信内容',
      width: '220' //表格宽度
    },
    {
      prop: 'sendResultFlag', // 关键字段
      label: '短信是否发送成功', // 查询条件提示词
      width: '160', //表格宽度
      enum: [
        // 查询条件的枚举值
        { label: '成功', value: 1 },
        { label: '失败', value: 0 }
      ],
      search: true, // 是否为查询条件
      searchType: 'select', // 查询类型
      placeholder: '短信是否发送成功',
      inputWidth: 150
    },
    {
      prop: 'sendResultContent',
      label: '失败原因',
      width: '120' //表格宽度
    },
    {
      prop: 'realSendTime',
      label: '实际发送时间',
      width: '140' //表格宽度
    },
    {
      prop: 'createTime',
      label: '创建时间',
      width: '140' //表格宽度
    },
    {
      prop: 'createBy',
      label: '创建人',
      placeholder: '创建人',
      search: true,
      searchType: 'select', // 查询类型
      remote: true,
      remoteFunc: 'getAllNoteCreateBy',
      props: 'self',
      inputWidth: 130
    }
  ],
  Remote: {
    getAllNoteCreateBy(resolve) {
      // 获取创建人
      GetAllNoteCreateBy().then((res) => {
        resolve(res.rows)
      })
    }
  }
}

export default Table
