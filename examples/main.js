/*
 * @Description: 
 * @Version: 2.0
 * @Author: 黄博文
 * @Date: 2022-04-24 20:53:16
 * @LastEditors: 黄博文
 * @LastEditTime: 2022-04-25 22:37:30
 */
import Vue from 'vue'
import App from './App.vue'
// import '../components/css/demo.scss'
// import '../components/css/card.scss'
// import '../components/css/button.scss'
import '../components/css/index.scss'
import Demo from '../components/lib/demo/index'
import Card from '../components/lib/card/index'
import Button from '../components/lib/button/index'
import Link from '../components/lib/link/index'
import Tree from '../components/lib/tree/index'
import Item from '../components/lib/tree/src/item'


Vue.use(Demo)  // Demo.install -> Vue.component
Vue.use(Card)  // Demo.install -> Vue.component
Vue.use(Button)  // Demo.install -> Vue.component
Vue.use(Link)  // Demo.install -> Vue.component
Vue.use(Tree)  // Demo.install -> Vue.component
Vue.component(Item, Item)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
