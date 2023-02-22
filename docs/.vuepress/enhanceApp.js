import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import move from 'aw-move'
import './css/index.scss'

import AwUI from '../../components/lib/index'
import '../../components/css/index.scss'

import hljs from 'highlight.js'
import 'highlight.js/styles/ir-black.css'

export default ({ Vue, options, router }) => {
  Vue.use(Element)
  // Vue.use(move)
  Vue.use(AwUI)
  Vue.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('pre code')
    blocks.forEach((block) => {
      hljs.highlightBlock(block)
    })
  })
}
