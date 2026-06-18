import { defineConfig } from '@rspack/cli';
import { rspack } from '@rspack/core';
import { withZephyr } from 'zephyr-rspack-plugin';

const config = defineConfig({
  entry: {
    main: './src/index.jsx',
  },
  output: {
    filename: '[name].[contenthash].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'ecmascript',
                jsx: true,
              },
              transform: {
                react: {
                  runtime: 'automatic',
                },
              },
            },
          },
        },
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: './index.html',
    }),
  ],
  devServer: {
    port: 3000,
    hot: true,
  },
});

export default withZephyr()(config);
