module.exports = {
  plugins: [
    '@vuepress/medium-zoom',
    '@vuepress/back-to-top',
    '@vuepress/nprogress',
  ],
  title: 'FC KĐT Đồng Văn',
  description: 'Website that manages all documents of FC KĐT Đồng Văn',
  themeConfig: {
    nav: [
      { text: 'Trang chủ', link: '/' },

    ],
   sidebarDepth: 3,    // extract to h4
   sidebar: 'auto',
   lastUpdated: 'Last Updated',
   searchMaxSuggestions: 10,

  }
}