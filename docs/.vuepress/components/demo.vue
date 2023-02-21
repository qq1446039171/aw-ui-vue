<template>
  <div class="demo">
    <h3 class="name">
      {{ name }}
    </h3>
    <p class="info">
      {{ info }}
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <slot name="container"></slot>
      </div>
      <div class="code-content" ref="content" :style="{ height: codeHeight }">
        <div class="code-content-height">
          <pre
            v-highlight
            class="pre"
          ><code class="code vue" style="white-space: pre-line;">{{ code.replace(/^s*/gm, '').trim() }}</code></pre>
        </div>
      </div>
      <div class="code-tool" @click="showCode" ref="xxx">
        <span class="code-tool-word">{{ showFlag === false ? '显示代码' : '隐藏代码' }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from '../mixin'

export default {
  name: 'demo',
  mixins: [mixin],
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
  mounted() {
    // this.codeHeight = this.$refs.content.scrollHeight + 'px'
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
      showFlag: false
    }
  }
}
</script>
<style lang="scss">
.demo {
  .name {
    margin: 55px 0 20px;
  }
  .info {
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
  }
  .component-wrapper {
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: 0.2s;
    .component-wrapper-demo {
      padding: 24px 24px 15px 24px;
    }

    .code-content {
      background-color: #333;
      border-top: 1px solid #eaeefb;
      overflow: hidden;
      transition: 0.2s;
      .code-content-height {
        .pre {
          background: #292d3e;

          .code {
            // color: #3182bd;
            // color: #fff;
            line-height: 28px;
          }
        }
      }
    }
    .code-tool {
      border-top: 1px solid #eaeefb;
      height: 44px;
      box-sizing: border-box;
      background-color: #fff;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      text-align: center;
      margin-top: -1px;
      color: #d3dce6;
      cursor: pointer;
      position: relative;
      line-height: 44px;
      color: #d3dce6;
      font-size: 14px;
    }
    .code-tool:hover {
      background-color: #f9fafc;

      .code-tool-word {
        color: #409eff;
      }
    }
  }
  .component-wrapper:hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }
}
</style>
