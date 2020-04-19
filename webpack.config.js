const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const getFileName = type => isDev ? `[name].${type}` : `[name].[hash].${type}`;
const getCssLoaders = () => ([
    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
    {
        loader: 'css-loader',
        options: {
            modules: {
                mode: 'local',
                localIdentName: '[local]--[hash:base64:5]',
                hashPrefix: 'my-custom-hash',
            },
            sourceMap: true
        }
    }, {
        loader: 'sass-loader'
    }
]);
const getJsLoaders = () => {
    const loaders = ['babel-loader'];

    if (isDev) {
        loaders.push('eslint-loader')
    }

    return loaders;
};
const getPlugins = () => {
    const plugins = [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            title: 'Roman\'s app',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new MiniCssExtractPlugin({
            filename: getFileName('css'),
            chunkFilename: '[id].[hash].css'
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'src/favicon.ico'),
            to: path.resolve(__dirname, 'dist')
        }])
    ];

    if (isProd) {
        plugins.push(new BundleAnalyzerPlugin())
    }

    return plugins
};
const getRules = () => ([
    {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: getJsLoaders()
    },
    {
        test: /\.s[ac]ss$/,
        use: getCssLoaders()
    },
    {
        test: /\.(png|jpg|svg|gif)$/,
        loader: 'file-loader'
    },
    {
        test: /\.(ttf|woff|woff2|eot)$/,
        loader: 'file-loader'
    }
]);
const getOptimization = () => ({
    splitChunks: {
        chunks: "all"
    },
    ...(isProd && {
        minimizer: [
            new TerserWebpackPlugin(),
            new OptimizeCssAssetsWebpackPlugin()
        ]})
});

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: ['@babel/polyfill', './index.tsx'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: getFileName('js')
    },
    resolve: {
        extensions: ['.js', '.tsx', '.ts', '.jpeg', '.jpg'],
        alias: {
            '@src': path.resolve(__dirname, 'src')
        }
    },
    plugins: getPlugins(),
    optimization: getOptimization(),
    module: {
        rules: getRules()
    },
    devServer: {
        port: 1111,
        hot: true,
        historyApiFallback: true
    },
    ...(isDev && {devtool: 'source-map'})
};
