import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Clover 精选',
  description: '发现下一个让你惊艳的工具',
  lang: 'zh-Hans',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#0a0a0a' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap', rel: 'stylesheet' }],
  ],
  themeConfig: {
    siteTitle: 'Clover 精选',
    nav: [
      { text: '首页', link: '/' },
      { text: 'AI 工具', link: '/ai-tools' },
      { text: '关于', link: '/about' }
    ],
    sidebar: false,
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