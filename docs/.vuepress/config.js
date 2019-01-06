module.exports = {
  title: 'Blog',
  description: '只有渴求进步的人才会进步',
  // head: [
  //   ['link', { rel: 'icon', href: '/img/logo.ico' }],
  //   ['link', { rel: 'manifest', href: '/manifest.json' }],
  // ],

  themeConfig: {
    // 导航栏配置
    nav: [
      { text: '主页', link: '/' },
      {
        text: '知识',
        // 在此处配置所有的博客路径
        items: [
          { text: 'html/css', 
            items: [
              { text: 'html/css', link: '/项目/' },
              { text: 'vue', link: '/项目/' },
              { text: 'node', link: '/项目/' },
              { text: 'linux', link: '/项目/' },
            ]
          },
          { text: 'vue', link: '/项目/' },
          { text: 'node', link: '/杂谈/' },
          { text: 'linux', link: '/杂谈/' },
        ],
      },
      { text: '关于', link: '/about/' },
      { text: 'Github', link: 'https://github.com/ChenSimin0103' },
    ],
    // 侧边栏配置
    // sidebar: {
    //   '/知识/': ['html/css', 'js', 'vue', 'node', 'linux'],
    //   '/项目/': ['vue-carousel', 'star'],
    //   '/杂谈/': ['/项目经验/', ''],
    // },
    // sidebarDepth: 2,
    // lastUpdated: 'Last Updated',

    // serviceWorker: true,
  },
};
// 那些渴求进步的人才会进步

// module.exports = {
//   themeConfig: {
//   // 导航栏配置
//   nav: [
//        { text: '主页', link: '/' },
//        { text: '博文',
//          items: [
//            { text: 'Android', link: '/android/' },
//            { text: 'ios', link: '/ios/' },
//            { text: 'Web', link: '/web/' }
//          ]
//        },
//        { text: '关于', link: '/about/' },
//        { text: 'Github', link: 'https://www.github.com/codeteenager' },
//    ],
//    // 侧边栏配置
//    sidebar: {
//           "/知识/": [
//                    "html/css",
//                    "js",
//                    "vue",
//                    "node",
//                    "linux"
//                     ],
//           "/项目/":[
//                    "vue-carousel",
//                    "star",
//                    ],
//           "/杂谈/":[
//                    "/项目经验/",
//                    "",
//                     ],
//        },
//    sidebarDepth: 2,
//    lastUpdated: 'Last Updated',
// },
// }

// module.exports = {
//   serviceWorker: true,
// }
