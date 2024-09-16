import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import baseConfig from "./webpack.config.js";

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin()
  ],
  ...baseConfig
}