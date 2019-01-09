module.exports = {
  title: 'Blog',
  description: '只有渴求进步的人才会进步',
  head: [
    ['link', { rel: 'icon', href: '/icon/myBook.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  // 供 pwa 的配置
  serviceWorker: true,

  // base: '/',
  base: '/vuepress-blog/',//当打包到vuepress-blog博客的时候才设置这个路径
  dist: './dist',

  // 使用自定义主题
  // theme: 主题名称,
  themeConfig: {
    // 导航栏配置，注意：文件夹名称不能为中文
    nav: [
      { text: '主页', link: '/' },
      {
        text: '知识',
        link: '/knowledge/',
        // 在此处配置所有的博客路径
        items: [
          { text: 'html&css', link: '/knowledge/html&css/' },
          { text: 'js', link: '/knowledge/js/' },
          { text: 'vue', link: '/knowledge/vue/' },
          { text: 'node', link: '/knowledge/node/' },
          { text: 'webpack', link: '/knowledge/webpack/' },
          { text: 'linux', link: '/knowledge/linux/' },
        ],
      },
      { text: '项目', link: '/project/' },
      { text: '杂谈', link: '/otherTips/' },
      { text: '关于', link: '/about/' },
      { text: 'Github', link: 'https://github.com/ChenSimin0103' },
    ],
    // 侧边栏配置，每添加一篇博客就配置一下这里，处理单位是文件夹
    // 注意了：文件名不要含有 ：，这些标准之外的符号，使用下划线或驼峰来写
    sidebar: {
      '/knowledge/html&css/': [
        {
          title: 'html&css', // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
          ],
        },
      ],

      '/knowledge/js/': [
        {
          title: 'js基础', // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            ['/knowledge/js/js函数基础_call和apply和bind', 'js函数基础_call,apply和bind'], // 你的md文件地址 + 名称
            ['/knowledge/js/js基础_正确的使用Promise和async', 'js基础_正确的使用Promise和async'],
            ['/knowledge/js/js基础_原型和继承', 'js基础_原型和继承'],
            ['/knowledge/js/js基础_深拷贝', 'js基础_深拷贝'],
          ],
        },
      ],

      '/knowledge/vue/': [
        {
          title: 'vue', // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            ['/knowledge/vue/尝试 vue-cli 3', '尝试 vue-cli 3'],
          ],
        },
      ],

      '/knowledge/node/': [
        {
          title: 'node-js', // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
          ],
        },
      ],

      '/knowledge/webpack/': [
        {
          title: 'webpack', // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            ['/knowledge/webpack/webpack打包初探', 'webpack打包初探'],
          ],
        },
      ],

      '/knowledge/linux/': [
        {
          title: 'linux入门', // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            ['/knowledge/linux/linux基本操作', 'linux基本操作'],
          ],
        },
      ],

      '/project/': [
        {
          title: '项目1', // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
          ],
        },
        {
          title: '项目2',
          collapsable: true,
          children: [

          ],
        },
      ],
      '/otherTips/': [
        {
          title: '杂谈', // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            ['/otherTips/RSA加密算法初探', 'RSA加密算法初探'],
            ['/otherTips/markdown的语法总结', 'markdown的语法总结'],
            ['/otherTips/组件的设计规范', '组件的设计规范'],
          ],
        },
      ],
      '/about/': [
        {
          title: '我知道', // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            ['q', 'q'], // 你的md文件地址 + 名称
            ['w', 'w']
          ],
        },
        {
          title: '关于',
          collapsable: true,
          children: [['q','q']],
        },
      ],
    },
    sidebarDepth: 2,
  },
};
