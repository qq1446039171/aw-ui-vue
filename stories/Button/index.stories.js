import AwButton from './index.vue'

export default {
  title: 'Button/Button',
  component: AwButton,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AwButton },
  template: '<aw-button v-bind="$props">默认</aw-button>',
})

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary'
}

export const Round = Template.bind({})
Primary.args = {
  type: 'primary',
  round: true
}

export const Large = Template.bind({})
Large.args = {
  size: 'large'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small'
}
