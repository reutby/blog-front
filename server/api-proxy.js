const proxy = require('http-proxy-middleware');
const {authService, contentService} = require('../config');

/**
 * This function is a temporary thingy because I'm too lazy right now
 * to insert an nginx router to the whole application.
 * when the nginx router will be added - this file can be removed.
 * @param app: Express.Application
 */
module.exports = function apiProxy(app) {
  const authProxy = proxy({
    target: `${authService.protocol}://${authService.url}:${authService.port}`,
    changeOrigin: true
  });
  const contentProxy = proxy({
    target: `${contentService.protocol}://${contentService.url}:${contentService.port}`,
    changeOrigin: true
  });

  app
    .use('/api/signin', authProxy)
    .use('/api/signup', authProxy)
    .use('/api/token', authProxy)
    .use('/api/me', authProxy)
    .use('/api/users', authProxy)
    .use('/api/categories', contentProxy)
    .use('/api/posts', contentProxy)
    .use('/api/menus', contentProxy)
};
