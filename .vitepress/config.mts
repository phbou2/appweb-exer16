import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Exercice 16",
  description: "Revue de code documentée",
  base: '/appweb-exer16/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Code reviews', link: '/philippe-bouchard.md' }
    ],

    sidebar: [
      {
        text: 'Code reviews',
        items: [
          { text: 'Philippe Bouchard code review', link: '/philippe-bouchard.md' },
          { text: 'Breno Mazzali Medeiros Tomazelli code review', link: '/BrenoMazzali-MedeirosTomazelli.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
