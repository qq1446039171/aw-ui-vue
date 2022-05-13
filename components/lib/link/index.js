import Link from './src/main.vue'

Link.install = function(Vue) {
  Vue.component(Link.name, Link)
}
if (window && window.Vue) {
  window.Vue.use(Link)
}

export default Link