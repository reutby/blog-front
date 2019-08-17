module.exports = {
  contentService: {
    protocol: process.env.CONTENT_SERVICE_PROTOCOL || 'http',
    url: process.env.CONTENT_SERVICE_URL || 'localhost',
    port: process.env.CONTENT_SERVICE_PORT || 9001,
  },
  authService: {
    protocol: process.env.AUTH_SERVICE_PROTOCOL || 'http',
    url: process.env.AUTH_SERVICE_URL || 'localhost',
    port: process.env.AUTH_SERVICE_PORT || 9000,
  },
};
