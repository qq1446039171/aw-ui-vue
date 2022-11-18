import AwLabel from './index.vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Label/Label',
  component: AwLabel,
  argTypes: {
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AwLabel },
  template: '<aw-label v-bind="$props" >急急急</aw-label>'
})

export const Primary = Template.bind()
Primary.args = {
  width: '100px',
  required: true
}