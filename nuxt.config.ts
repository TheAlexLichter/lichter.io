import tailwindTypography from '@tailwindcss/typography'
import tailwindForms from '@tailwindcss/forms'
import { typographyStyles } from './typography.js'

export default defineNuxtConfig({

  routeRules: {
    '/support-me/': { redirect: { to: '/sponsors/', statusCode: 301 } },
    '/timeline/': { redirect: { to: '/about/', statusCode: 301 } },
    // TODO: After https://github.com/unjs/nitro/issues/1748 is resolved
    // '/slides/**': { redirect: { to: 'https://slides.com/mannil/**', statusCode: 302 } },
    // TODO: Remove this ^equivalent from _redirects afterwards
  },
  runtimeConfig: {
    public: {
      site: {
        url: 'https://www.lichter.io',
      }
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-icon',
    '@nuxt/content',
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxtjs/plausible',
  ],

  nitro: {
    prerender: {
      routes: [
        '/feed.xml',
      ],
    },
    devProxy: {
      '/api/newsletter': { target: 'https://lichter-io-newsletter.netlify.app', changeOrigin: true }
    }
  },

  site: {
    url: 'https://www.lichter.io',
    name: 'Alexander Lichter',
    trailingSlash: true,
  },

  ogImage: {
    compatibility: {
      dev: { sharp: false },
    },
  },

  plausible: {
    domain: 'lichter.io',
    apiHost: 'https://plausible.lichter.io',
  },

  content: {
    documentDriven: true,
    highlight: {
      theme: 'vitesse-dark'
    },
    markdown: {
      remarkPlugins: ['remark-reading-time'],
      rehypePlugins: {
        'rehype-external-links': false
      }
    },
  },

  tailwindcss: {
    config: {
      plugins: [tailwindTypography, tailwindForms],
      theme: {
        typography: typographyStyles,
        extend: {
          backgroundSize: {
            '200%': '200%'
          },
          animation: {
            'bg-shift': 'bg-shift 2s linear infinite',
            'pulse-slow': 'pulse 3s linear infinite',
          },
          keyframes: {
            'bg-shift': {
              '0%, 100%': { backgroundPosition: '0% 50%' },
              '50%': { backgroundPosition: '100% 50%' },
            }
          }
        }
      }
    }
  },

  devtools: {
    enabled: true
  },

  experimental: {
    inlineRouteRules: true,
    defaults: {
      useAsyncData: {
        deep: false,
      }
    },
    headNext: true,
    sharedPrerenderData: true,
    // Re-enable when https://github.com/nuxt/nuxt/issues/25743 is resolved
    appManifest: false,
  },

  future: {
    typescriptBundlerResolution: true
  },

  watch: ['typography.ts']
})
