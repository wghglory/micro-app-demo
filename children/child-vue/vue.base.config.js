module.exports = {
  productionSourceMap: false,
  devServer: {
    hot: true,
    disableHostCheck: true,
    port: 4001,
    overlay: {
      warnings: false,
      errors: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
