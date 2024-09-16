export default {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: new URL('build', import.meta.url).pathname
  },
  mode: "production",
  optimization: {
    minimize: true,
  },
  target: "node0.10",
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to .js files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.js$/, // Apply this rule to .js files
        include: /node_modules\/streams/,
        use: {
          loader: "babel-loader",
          options: {
            sourceType: "script"
          }
        },
      },
    ],
  },
  stats: {
    loggingDebug: ["babel-loader"]
  },
};
