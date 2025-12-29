// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // Metadatos y enlaces globales para SEO y rendimiento
  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      title: 'DACAV — Web Studio',
      titleTemplate: '%s | DACAV',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'DACAV — Estudio de desarrollo web: sitios profesionales, optimizados y accesibles.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'DACAV — Web Studio' },
        { property: 'og:description', content: 'Desarrollo web profesional con foco en rendimiento, SEO y experiencia de usuario.' },
        { property: 'og:image', content: '/og-image.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@DACAV' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'preconnect', href: 'https://images.unsplash.com' },
        { rel: 'preconnect', href: 'https://www.transparenttextures.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap' },
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'canonical', href: process.env.SITE_URL || 'https://example.com' }
      ]
    }
  },
  // Exponer la URL del sitio para que el endpoint sitemap use la URL correcta.
  runtimeConfig: {
    public: {
      siteUrl: process.env.SITE_URL || 'https://example.com'
    }
  },
  image: {
    // Dominios permitidos para optimización con @nuxt/image
    domains: ['images.unsplash.com', 'www.transparenttextures.com'],
    screens: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  // Optimizaciones sugeridas para Vite/Nuxt
  vite: {
    build: {
      // Mantener configuraciones por defecto; ajustar si es necesario
    }
  }
})