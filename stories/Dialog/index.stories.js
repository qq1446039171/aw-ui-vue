import AwDialog from './index.vue'

export default {
  title: 'Dialog/Dialog',
  component: AwDialog,
  argTypes: {}
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AwDialog },
  template: '<aw-dialog v-bind="$props" />'
})

export const Primary = Template.bind()
Primary.args = {
  imgSrc: 'https://pic2.zhimg.com/v2-cd034028a5f36322c71216f30425d2d1_l.jpg?source=172ae18b',
  summary: '这是一个测试案例'
}
export const Secondary = Template.bind({})
Secondary.args = {
  imgSrc: 'https://pic2.zhimg.com/v2-cd034028a5f36322c71216f30425d2d1_l.jpg?source=172ae18b',
  summary: '这是一个测试案例2'
}
