const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/js/content-scripts/content-script.js',
  mode: 'none',
  output: {
    path: path.resolve(__dirname, 'build', 'js', 'content-scripts'),
    filename: 'content-script.js'
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src'), to: path.resolve(__dirname, 'build') }
      ]
    })
  ]
};
