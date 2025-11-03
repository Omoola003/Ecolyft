/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.ecolyft.com', // replace with your production domain when live
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin', '/api/*'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.ecolyft.com/sitemap.xml',
    ],
    policies: [{ userAgent: '*', allow: '/' }],
  },
}
