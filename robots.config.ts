export default {
  groups: [
    {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/_nuxt/', 
        '/api/', 
        '/admin',
        '/search',
        '/*?*' // Evita parámetros de búsqueda en Google
      ],
    },
    {
      userAgent: ['GPTBot', 'CCBot', 'ChatGPT-User'],
      disallow: ['/'],
    }
  ],
  sitemap: '/sitemap.xml',
}