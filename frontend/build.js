const webpack = require('webpack');
const config = require('react-scripts/config/webpack.config')('production');

// Remove the CSS minimizer plugin
config.optimization.minimizer = config.optimization.minimizer.filter(
  plugin => !(plugin.constructor.name === 'CssMinimizerPlugin')
);

webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.error(err || stats.toString());
    process.exit(1);
  }
  console.log(stats.toString());
}); 