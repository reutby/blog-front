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

  app.use('/api/signin', authProxy)
  app.use('/api/signup', authProxy)
  app.use('/api/token', authProxy)
  app.use('/api/me', authProxy)
  app.use('/api/users', authProxy)
  app.use('/api/categories', contentProxy)
  app.use('/api/posts', contentProxy)
  app.use('/api/menus', contentProxy)
  app.use('/api/tags', contentProxy)
  app.use('/api/assets', assetsProxy)
  app.use('/gp-admin', adminProxy)
}
