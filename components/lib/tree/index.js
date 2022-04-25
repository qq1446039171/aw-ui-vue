/*
 * @Description: 数组件
 * @Version: 2.0
 * @Author: 黄博文
 * @Date: 2022-04-25 21:00:31
 * @LastEditors: 黄博文
 * @LastEditTime: 2022-04-25 22:37:56
 */

import Tree from './src/main.vue'

Tree.install = function(Vue) {
  Vue.component(Tree.name, Tree)
}


export default Tree
// https://codepen.io/shayminsky21/pen/xXwxgm