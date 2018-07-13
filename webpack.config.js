import path from 'path'
import webpack from 'webpack'

import MiniCssExtract from 'mini-css-extract-plugin'
import Uglify from 'uglifyjs-webpack-plugin'

import { paths } from './paths.config'

export let dev = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

        options: {
          presets: ['es2015'],
        }
      },
      {
        test: /\.(scss|css)$/,

        use: [
          {
            loader: MiniCssExtract.loader
          },
          {
            loader: 'css-loader',

            options: {
              sourceMap: false,
              minimize: false
            }
          },
          {
            loader: 'sass-loader',

            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtract({ filename: '[name].css' }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'holder': 'holderjs',
      'window.Holder': 'holderjs',
      'Holder': 'holderjs'
    })
  ],

  entry: {
    fabricator: paths.scripts.fabricator,
    scu: paths.scripts.dev
  },

  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, paths.dest)
  },

  devtool: 'source-map',
  mode: 'development',
  stats: 'verbose'
};

export let prod = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				options: {
					presets: ['es2015']
				}
			},
			{
				test: /\.(scss|css)$/,

				use: [
					{
						loader: MiniCssExtract.loader
					},
					{
						loader: 'css-loader',

						options: {
							sourceMap: false,
              minimize: true
						}
					},
					{
						loader: 'sass-loader',

						options: {
							sourceMap: false
						}
					}
				]
			}
		]
	},

	plugins: [
		new Uglify(),
		new MiniCssExtract({ filename: '[name].css' }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
	],

	entry: {
	  fabricator: paths.scripts.fabricator,
    scu: paths.scripts.prod
  },

	output: {
		filename: '[name].js',
		chunkFilename: '[name].js',
		path: path.resolve(__dirname, paths.dest)
	},

	mode: 'production',
  stats: 'errors-only'
};
