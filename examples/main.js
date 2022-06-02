/*
 * @Description: 
 * @Version: 2.0
 * @Author: 黄博文
 * @Date: 2022-04-24 20:53:16
 * @LastEditors: 黄博文
 * @LastEditTime: 2022-04-26 10:35:07
 */
import Vue from 'vue'
import App from './App.vue'
// import '../components/css/demo.scss'
// import '../components/css/card.scss'
// import '../components/css/button.scss'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import '../components/css/index.scss'
import Demo from '../components/lib/demo/index'
import Card from '../components/lib/card/index'
import Button from '../components/lib/button/index'
import Link from '../components/lib/link/index'
import Tree from '../components/lib/tree/index'
import Label from '../components/lib/label/index'
import Table from '../components/lib/table/index'

Vue.use(Demo)  // Demo.install -> Vue.component
Vue.use(Card)  // Demo.install -> Vue.component
Vue.use(Button)  // Demo.install -> Vue.component
Vue.use(Link)  // Demo.install -> Vue.component
Vue.use(Tree)  // Demo.install -> Vue.component
Vue.use(Label)  // Demo.install -> Vue.component
Vue.use(Table)  // Demo.install -> Vue.component

Vue.config.productionTip = false
 
new Vue({
  render: h => h(App),
}).$mount('#app')
