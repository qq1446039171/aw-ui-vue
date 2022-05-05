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
    }
  }
</script>

<br/>
 <aw-tree :treeData="treeData" ></aw-tree>
 <br/>
 <aw-tree :treeData="treeData" type="file"></aw-tree>

### 代码

```html
类型一：<aw-tree :treeData="treeData"></aw-tree> 
类型二：<aw-tree :treeData="treeData" type="file"></aw-tree>

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
    }
  }
</script>
```

### Attributes

| 属性     | 说明         | 类型   | 可选值 | 是否必要 | 默认值 |
| :------- | :----------- | :----- | :----- | :------- | :----- |
| treeData | 展示数据     | array  | -      | true     | -      |
| type     | 图标展示类型 | string | file   | false    | false  |
