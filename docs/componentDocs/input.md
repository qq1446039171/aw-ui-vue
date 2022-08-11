# Input

输入框组件

### 示例

<script>
export default {
  data() {
    return {
      value: 2
    }
  }
}
</script>
<br/>

<h4>最大值为99 最小值为5</h4>  
<br/>

<aw-input v-model.number="value"  :max="99" :min="5" clearable placeholder="请输入数量"></aw-input>
