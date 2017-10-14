const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    inline: true,
    stats: {
        colors: true,
        chunks: false,
    },
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
}).listen(3000, '0.0.0.0', (err, result) => {
    if (err) {
        console.log(err, result);
    }
    console.log('Listening at 0.0.0.0:3000');
});
