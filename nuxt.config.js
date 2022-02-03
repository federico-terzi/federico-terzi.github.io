import { extractCleanSlug } from './utils/contentUtils'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  server: {
    host: '0.0.0.0', // default: localhost
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Federico Terzi - A Software Engineering Journey',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'title',
        name: 'title',
        content: 'Federico Terzi - A Software Engineering Journey',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          "A Developer who loves building great products. Learn more about my journey as a software engineer, you'll find technical articles, side-projects and much more!",
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          "A Developer who loves building great products. Learn more about my journey as a software engineer, you'll find technical articles, side-projects and much more!",
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'stylesheet', href: '/colors.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-32x32.png',
        sizes: '32x32',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-16x16.png',
        sizes: '16x16',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
        sizes: '180x180',
      },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vueObserveVisibility.client.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Inter: {
            wght: ['400;700'],
          },
        },
        subsets: ['latin'],
        display: 'block',
        prefetch: false,
        preconnect: false,
        preload: false,
        download: true,
        base64: false,
      },
    ],
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/feed',
    '@nuxtjs/sitemap',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  feed() {
    const baseUrlArticles = 'https://federicoterzi.com/blog'
    const baseLinkFeedArticles = '/feed/blog'
    const { $content } = require('@nuxt/content')

    const createFeedArticles = async function (feed) {
      feed.options = {
        title: 'Federico Terzi',
        description: 'A Software Engineering Journey',
        link: baseUrlArticles,
      }
      const articles = await $content('articles').fetch()

      articles.forEach((article) => {
        const cleanedSlug = extractCleanSlug(article.slug)
        article.cleanedSlug = cleanedSlug
      })

      articles.forEach((article) => {
        const url = `${baseUrlArticles}/${article.cleanedSlug}`

        feed.addItem({
          title: article.title,
          id: url,
          link: url,
          date: new Date(article.date),
          description: article.description,
          content: article.description,
        })
      })
    }

    return [
      {
        path: `/feed/rss.xml`,
        type: 'rss2',
        create: createFeedArticles,
      },
      {
        path: `/feed.xml`,
        type: 'rss2',
        create: createFeedArticles,
      },
      {
        path: `/feed.json`,
        type: 'json1',
        create: createFeedArticles,
      },
      {
        path: `/feed`,
        type: 'rss2',
        create: createFeedArticles,
      },
    ]
  },

  sitemap: {
    hostname: 'https://federicoterzi.com',
    gzip: true,
    routes: async () => {
      const { $content } = require('@nuxt/content')

      let routes = []
      const articles = await $content('articles').fetch()

      articles.forEach((article) => {
        const cleanedSlug = extractCleanSlug(article.slug)
        article.cleanedSlug = cleanedSlug
      })

      articles.forEach((article) => {
        const url = `blog/${article.cleanedSlug}/`

        routes.push({ url })
      })

      return routes
    },
  },
}
