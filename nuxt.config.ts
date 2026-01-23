// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Configuración de sitio centralizada para Nuxt SEO
  site: {
    url: 'https://dacav.vercel.app',
    name: 'DACAV — Web Studio',
    indexable: true,
  },

  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      title: 'DACAV — Web Studio',
      titleTemplate: '%s | DACAV',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        
        // Verificación de Google
        { name: 'google-site-verification', content: 'zuceSRodwbpYnw20AniZKfXDdmCwEe7or0kI1yK7PZw' },
        
        // SEO Básico
        { name: 'description', content: 'DACAV — Estudio de desarrollo web: sitios profesionales, optimizados y accesibles.' },
        
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://dacav.vercel.app/' },
        { property: 'og:site_name', content: 'DACAV' },
        { property: 'og:title', content: 'DACAV — Web Studio' },
        { property: 'og:description', content: 'Desarrollo web profesional con foco en rendimiento, SEO y experiencia de usuario.' },
        { property: 'og:image', content: 'https://dacav.vercel.app/dacav-logo.webp' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@DACAV' },
        { name: 'twitter:image', content: 'https://dacav.vercel.app/dacav-logo.webp' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://dacav.vercel.app/' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        // Carga de fuentes optimizada
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap' },
      ]
    }
  },

  // Optimización de Imágenes
  image: {
    format: ['webp', 'avif'],
    domains: ['images.unsplash.com', 'www.transparenttextures.com'],
  },

  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxt/image',
    '@nuxtjs/sitemap', 
    '@nuxtjs/robots'   
  ],

  // Corregido: Propiedades válidas para @nuxtjs/sitemap
  sitemap: {
    enabled: true,
  },

  // Corregido: En versiones nuevas no se usa configPath directamente así
  robots: {

  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://dacav.vercel.app'
    }
  }
})