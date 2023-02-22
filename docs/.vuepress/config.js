const path = require('path')
module.exports = {
  port: '3306',
  title: 'aw-ui-vue',
  description: '基于Vue、Element封装的轻量、简约的ui框架',
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.jpg'
      }
    ] // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/aw-ui-vue/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    logo: '/logo.jpg',
    sidebarDepth: 1, // 侧边栏显示2级
    nav: [
      // 导航栏配置
      {
        text: 'Home⚡️',
        link: '/'
      },
      {
        text: 'Gitee',
        link: 'https://gitee.com/hbowen/aw-ui-vue'
      }
    ],
    sidebar: {
      '/componentDocs/': [
        {
          title: '开始使用',
          collapsable: false,
          children: ['explain', 'install']
        },
        {
          title: '基础组件',
          collapsable: false,
          children: ['button','card','link']
        }
      ]
    }
  },
  sass: { indentedSyntax: true },

  plugins: ['@vuepress/nprogress']
}
