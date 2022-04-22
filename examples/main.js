import Vue from 'vue'
import App from './App.vue'
// import '../components/css/demo.scss'
// import '../components/css/card.scss'
// import '../components/css/button.scss'
import '../components/css/index.scss'
import Demo from '../components/lib/demo/index'
import Card from '../components/lib/card/index'
import Button from '../components/lib/button/index'


Vue.use(Demo)  // Demo.install -> Vue.component
Vue.use(Card)  // Demo.install -> Vue.component
Vue.use(Button)  // Demo.install -> Vue.component

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
