import Label from './src/main.vue'

Label.install = function(Vue) {
  Vue.component(Label.name, Label)
}
// if (window && window.Vue) {
//   window.Vue.use(Label)
// }

export default Label
