import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import baseConfig from "./webpack.config.js";

export default {
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
  ...baseConfig,
}