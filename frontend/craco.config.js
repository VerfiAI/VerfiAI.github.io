module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.optimization.minimizer = webpackConfig.optimization.minimizer.filter(
        (minimizer) => minimizer.constructor.name !== 'CssMinimizerPlugin'
      );
      return webpackConfig;
    },
  },
}; 