const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const HappyPack = require('happypack');


module.exports = {
    context: path.join(__dirname, 'assets'),

    entry: [
        'webpack/hot/only-dev-server',
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'react-hot-loader/patch',
        './index',
    ],

    cache: true,

    output: {
        path: path.resolve('./public/'),
        filename: '[id]-[name]-[hash:8].js',
        publicPath: 'http://localhost:3000/',
        devtoolModuleFilenameTemplate: 'file://[absolute-resource-path]',
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new BundleTracker({ filename: './webpack-manifest.json' }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendors.bundle.js'
        }),
        new HappyPack({
            loaders: ['babel-loader'],
            threads: 4,
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['happypack/loader'],
            },
            {
                // Load JSON as an import
                test: /\.json$/,
                loader: 'json',
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true,
                            importLoaders: 1,
                            localIdentName: '[name]--[local]--[hash:base64:8]'
                        }
                    },
                    'postcss-loader' // has separate config, see postcss.config.js nearby
                ]
            },

        ]
    },
    resolve: {
        modules: [path.resolve('./assets'), 'node_modules'],
        extensions: ['*', '.js', '.jsx']
    },
    devtool: 'cheap-module-eval-source-map',
};
