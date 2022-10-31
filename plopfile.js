module.exports = (plop) => {
  // 创建生成器
  plop.setGenerator('component', {
    // 生成器描述
    description: 'create a component for aw-ui',
    // 询问
    prompts: [
      // 组件名称
      {
        type: 'input',
        name: 'name',
        message: 'component name',
        default: 'component'
      }
    ],
    // 把基于模板创建的文件，放到指定的目录
    actions: [
      {
        type: 'add',
        path: 'components/lib/{{kebabCase name}}/index.js',
        templateFile: 'template/components/index.hbs'
      },
      {
        type: 'add',
        path: 'components/lib/{{kebabCase name}}/src/main.vue',
        templateFile: 'template/components/src/main.hbs'
      },
      {
        type: 'add',
        path: 'components/css/{{kebabCase name}}.scss',
        templateFile: 'template/components/css/index.hbs'
      },
      {
        type: 'add',
        path: 'docs/componentDocs/{{kebabCase name}}.md',
        templateFile: 'template/docs/componentDocs/index.hbs'
      },
      {
        type: 'add',
        path: 'docs/.vuepress/components/aw-{{kebabCase name}}.vue',
        templateFile: 'template/docs/.vuepress/components/index.hbs'
      },
      {
        type: 'add',
        path: 'stories/{{properCase name}}/index.vue',
        templateFile: 'template/stories/componentDocs/index.hbs'
      },
      {
        type: 'add',
        path: 'stories/{{kebabCase name}}/index.stories.js',
        templateFile: 'template/stories/.vuepress/components/index.hbs'
      },
    ]
  })
}
