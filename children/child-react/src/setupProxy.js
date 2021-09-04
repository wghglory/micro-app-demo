const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  // app.use('*', (req, res, next) => {
  //   req.headers = {
  //     ...req.headers,
  //     'Access-Control-Allow-Origin': '*',
  //   };
  //   console.log(req.headers);
  //   return next();
  // });

  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3000',
      changeOrigin: true,
      secure: false,
      // pathRewrite: {
      //   '^/api': '/api/v1',
      // },
      onProxyRes: (proxyRes, req, res) => {
        proxyRes.headers['x-added'] = 'foobar'; // add new header to response
      },
    }),
  );
};
