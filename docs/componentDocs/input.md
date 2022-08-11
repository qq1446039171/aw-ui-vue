# Input

输入框组件

### 示例

<script>
export default {
  data() {
    return {
      value1: 1,
      value: 2
    }
  }
}
</script>
<br/>

<h4>最大值为99 最小值为5</h4>  
<br/>

<aw-input v-model.number="value1"  :max="99" :min="5" clearable placeholder="请输入数量"></aw-input>
<br/>
<br/>

<h4>只能输入数值型，且只能到小数点后三位(根据float-num来确定小数点后几位)</h4>  
<br/>
<aw-input v-model="value" type="float" :float-num="3" clearable :width="130" placeholder="请输入数量"></aw-input>

### 代码

```html
<aw-input v-model.number="value"  :max="99" :min="5" clearable placeholder="请输入数量"></aw-input>
<br/>
<aw-input v-model="value" type="float" :float-num="3" clearable :width="130" placeholder="请输入数量"></aw-input>

<script>
  export default {
    data() {
      return {
        value:null
      }
    }
  }
```

### Attributes

| 属性      | 说明                                            | 类型   | 可选值                         | 是否必要 | 默认值 |
| :-------- | :---------------------------------------------- | :----- | :----------------------------- | :------- | :----- |
| type      | input 类型                                      | String | 原有的 el-input 的 type, float | false    | -      |
| width     | input 的宽度                                    | Number | -                              | false    | 150    |
| float-num | 允许输入小数点后几位(必须在 type="float"时生效) | Number | -                              | false    | 2      |
