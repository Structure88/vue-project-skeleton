const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  // mode: 'production',

  entry: './src/main.js',

  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      },
      // // 所有的图片构建之后全部生成单个文件
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: 'images/[hash][ext][query]'
      //   }
      // },

      // // 所有的图片构建之后全部生成dataURL
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   type: 'asset/inline'
      // },

      // 所有的图片构建之后根据图片大小动态生成单个文件或者dataURL
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 5 * 1024 // 5kb
          }
        },
        // 生成单个图片时保存的路径和文件名
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'body',
      scriptLoading: 'blocking'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new ESLintPlugin({
      fix: true
    })
  ],

  devServer: {
    contentBase: './dist',
    port: 8080,
    open: true
  }
};
