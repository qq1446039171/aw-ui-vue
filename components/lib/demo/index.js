import Demo from './src/main.vue'

Demo.install = function(Vue) {
  Vue.component(Demo.name, Demo)
}

// if (window && window.Vue) {
//   window.Vue.use(Demo)
// }

export default Demo