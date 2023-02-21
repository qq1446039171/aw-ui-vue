<template>
  <div class="demo">
    <h3>
      {{ name }}
    </h3>
    <p>
      {{ info }}
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <slot name="container"></slot>
      </div>
      <div class="code-content" ref="content" v-highlight :style="{ height: codeHeight }">
        <div class="code-content-height">
          <pre><code class="html" style="white-space: pre-line;">{{ code.replace(/^s*/gm, '').trim() }}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode" ref="xxx">
        <i v-if="showFlag === false" class="show-icon icon-zhankai"></i>
        <i v-else class="show-icon icon-shouqi"></i>
        <span class="lock-code-word">{{ showFlag === false ? '显示代码' : '隐藏代码' }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from '../mixin'

export default {
  name: 'demo',
  mixins: [mixin],
  components: {
    // WIcon,
  },
  props: {
    name: {
      type: String,
      default: () => ''
    },
    info: {
      type: String,
      default: () => ''
    },
    code: {
      type: String,
      default: () => ''
    }
  },
  created() {
    this.codeStr = this.code
  },
  mounted() {
    this.codeHeight = this.$refs.content.scrollHeight + 'px'
  },
  methods: {
    showCode() {
      const code_dom_height = this.$refs.content.scrollHeight
      this.showFlag = !this.showFlag
      if (this.showFlag) {
        this.codeHeight = code_dom_height + 'px'
      } else {
        this.codeHeight = '0'
      }
    }
  },
  data() {
    return {
      codeHeight: 0,
      showFlag: true,
      codeStr: '<b-button>默认按钮</b-button> \n <b-button>默认按钮</b-button>'
    }
  }
}
</script>
<style lang="scss">
.component-wrapper {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  .component-wrapper-demo {
    padding: 24px 24px 15px 24px;
  }
}

.code-content {
  transition: 0.5s linear;
}

.lock-code:hover .show-icon {
  opacity: 0;
}
</style>
