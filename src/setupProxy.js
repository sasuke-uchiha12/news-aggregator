// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://generativelanguage.googleapis.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/v1beta', // Rewrite path
      },
    })
  );
};
