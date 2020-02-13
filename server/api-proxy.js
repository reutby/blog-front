const proxy = require('http-proxy-middleware')
const { authService, contentService, adminPanel, assetsService } = require('../config')

/**
 * This function is a temporary thingy because I'm too lazy right now
 * to insert an nginx router to the whole application.
 * when the nginx router will be added - this file can be removed.
 * @param app: Express.Application
 */
module.exports = function apiProxy (app) {
  const authProxy = proxy({
    target: `${authService.protocol}://${authService.url}:${authService.port}`,
    changeOrigin: true
  })
  const contentProxy = proxy({
    target: `${contentService.protocol}://${contentService.url}:${contentService.port}`,
    changeOrigin: true
  })

  const adminProxy = proxy({
    target: `${adminPanel.protocol}://${adminPanel.url}:${adminPanel.port}`,
    changeOrigin: true
  })

  const assetsProxy = proxy({
    target: `${assetsService.protocol}://${assetsService.url}:${assetsService.port}`,
    changeOrigin: true
  })

  app.use([
      '/api/signin',
      '/api/signup',
      '/api/token',
      '/api/me',
      '/api/users',
      '/api/verification'
    ],
    authProxy)

  app.use([
    '/api/categories',
    '/api/posts',
    '/api/menus',
    '/api/tags',
    '/api/configurations'
  ], contentProxy)

  app.use('/api/assets', assetsProxy)
  app.use('/gp-admin', adminProxy)
}
