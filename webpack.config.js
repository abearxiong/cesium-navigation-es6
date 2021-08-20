const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: './viewerCesiumNavigationMixin.js',
  mode: 'production',
  externals: {
    Cesium: 'Cesium',
  },
  output: {
    library: 'CesiumNavigation',
    filename: 'navigation.js',
  },
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/i,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            // options: {
            //   // 关闭 CSS esModule,一定要写上,否则图片路径加载不了
            //   importLoaders: 1,
            //   esModule: false,
            // },
          },
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       ident: 'postcss',
          //       plugins: ['postcss-preset-env'],
          //     },
          //   },
          // },
          {
            loader: 'less-loader', // compiles Less to CSS
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'navigation.css',
    }),
  ],
};
