# Tree

Tree 树组件

### 示例

<script>
  export default {
    data() {
      return {
        treeType:'file',
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
              },
            ]
          }
        ]
      }
    },
    methods:{
      handleNodeClick(node) {
        console.log(node)
      }
    }
  }
</script>

<br/>
 <aw-tree :treeData="treeData" ></aw-tree>
 <br/>
 <aw-tree :treeData="treeData" type="file" @node-click="handleNodeClick"></aw-tree>

### 代码

```html
类型一：<aw-tree :treeData="treeData"></aw-tree> 
类型二：<aw-tree :treeData="treeData" type="file" @node-click="handleNodeClick"></aw-tree>

<script>
  export default {
    data() {
      return {
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
                label: '二级 3-1'
              }
            ]
          }
        ]
      }
    },
    methods:{
      handleNodeClick(node) {
        console.log(node)
      }
    }
  }
</script>
```

### Attributes

| 属性     | 说明         | 类型   | 可选值 | 是否必要 | 默认值 |
| :------- | :----------- | :----- | :----- | :------- | :----- |
| node-click | 展示数据     | array  | -      | true     | -      |
| type     | 图标展示类型 | string | file   | false    | false  |


### Events

| 事件     | 说明         | 回调参数   
| :------- | :----------- | :----- | 
| treeData | 节点被点击时的回调    | 传递给 data 属性的数组中该节点所对应的对象  | 
