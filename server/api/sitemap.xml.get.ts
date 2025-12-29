import { defineEventHandler } from 'h3'

export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl || 'https://example.com'

  const routes = [
    '/',
    '/services',
    '/projects',
    '/about',
    '/contact'
  ]

  const now = new Date().toISOString()

  const urls = routes.map((route) => `
    <url>
      <loc>${siteUrl.replace(/\/$/, '')}${route}</loc>
      <lastmod>${now}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
  </urlset>`

  // set header
  event.node.res.setHeader('content-type', 'application/xml')
  return xml
})
