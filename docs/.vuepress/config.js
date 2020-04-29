module.exports = {
    title: '网课学习',  // 设置网站标题
    description : 'Adroi',
    base : '/nlxstudy/',  // 这是部署到github相关的配置
    // dest: './dist',    // 设置输出目录
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig : {
      nav : [  // 导航栏配置
          { text: '主页', link: '/' },
          { text: 'External', link: 'http://baidu.com', target:'_blank' },
      ],
      sidebar: {
          '/' : [
            {
                title: '语文',   // 必要的
                path: '../chinese/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: []
            },
            {
                title: '数学',   // 必要的
                path: '../math/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: []
            },
            {
                title: '英语',   // 必要的
                path: '../english/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: []
            }
          ]
      },
    //   sidebar: 'auto', // 侧边栏配置
      sidebarDepth: 2, // 侧边栏显示2级
    }
  }