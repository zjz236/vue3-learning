const path = require('path');
module.exports = {
  title: 'Vue3学习日记',
  port: 9080,
  base: '/vue3-learning/',
  themeConfig: {
    sidebar: [
      {
        text: 'The process: Making Vue 3',
        link: '/',
      },
      {
        text: 'Vue3.x和Vue2.x的区别',
        link: '/difference'
      },
      {
        text: 'Composition API',
        link: '/compositionAPI'
      },
      {
        text: 'Vue2.x和Vue3.x响应式对比',
        link: '/responsive'
      },
      {
        text: 'Teleport',
        link: '/teleport'
      },
      {
        text: '其他区别',
        link: '/other'
      }
    ],
  },
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
  ]
}