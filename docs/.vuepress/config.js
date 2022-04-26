/*
 * @Description: 
 * @Version: 2.0
 * @Author: 黄博文
 * @Date: 2022-04-20 09:29:30
 * @LastEditors: 黄博文
 * @LastEditTime: 2022-04-26 11:10:51
 */
module.exports = {
  base:'/aw-ui-vue/',
  title: 'Aw-ui-vue',
  themeConfig: {
      logo: '/logo.png',
    sidebar: [
      '/',
      '/componentDocs/card',
      '/componentDocs/button',
      '/componentDocs/link',
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Gitee', link: 'https://gitee.com/hbowen/aw-ui-kit' },
      { text: 'Npm', link: 'https://www.npmjs.com/package/aw-ui-vue' },
    ]
  }
}