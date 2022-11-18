import AwLink from './index.vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Link/Link',
  component: AwLink,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['default', 'primary', 'success', 'warning', 'danger', 'info']
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AwLink },
  template: '<aw-link v-bind="$props" >急急急</aw-link>'
})

export const Link = Template.bind()
Link.args = {}
