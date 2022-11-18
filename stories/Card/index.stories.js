import AwCard from './index.vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Card/Card',
  component: AwCard,
  argTypes: {
    // imgSrc: { control: { type: 'string' }, description: '图片路径' }
  }
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AwCard },
  template: '<aw-card v-bind="$props" />'
})
// export const Primary = () => ({
//   components: { AwCard },
//   template: '<aw-card summary="这是一个测试案例" imgSrc="https://pic2.zhimg.com/v2-cd034028a5f36322c71216f30425d2d1_l.jpg?source=172ae18b"/>',
// });
export const Primary = Template.bind()
// // More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  imgSrc: 'https://pic2.zhimg.com/v2-cd034028a5f36322c71216f30425d2d1_l.jpg?source=172ae18b',
  summary: '这是一个测试案例'
}
export const Secondary = Template.bind({})
Secondary.args = {
  imgSrc: 'https://pic2.zhimg.com/v2-cd034028a5f36322c71216f30425d2d1_l.jpg?source=172ae18b',
  summary: '这是第二个测试案例'
}

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
