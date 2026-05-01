import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Clover 精选',
  description: '发现下一个让你惊艳的工具',
  lang: 'zh-Hans',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#10b981' }],
  ],
  themeConfig: {
    siteTitle: 'Clover 精选',
    nav: [
      { text: '首页', link: '/' },
      { text: 'AI 工具', link: '/ai-tools' },
      { text: '关于', link: '/about' }
    ],
    sidebar: [
      {
        text: 'AI 工具精选',
        items: [
          { text: '2026 年 10 款最佳免费 AI', link: '/ai-tools' }
        ]
      }
    ],
    footer: {
      message: 'Built with VitePress + ☘️ Clover',
      copyright: '© 2026 Clover 精选'
    }
  },
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    }
  }
})