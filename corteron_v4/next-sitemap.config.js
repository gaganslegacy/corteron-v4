/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.corteron.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: './public',
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }],
  },
  exclude: ['/api/*'],
}
