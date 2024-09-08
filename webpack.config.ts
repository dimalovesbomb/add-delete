import path from 'path';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import type { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const devServer: DevServerConfiguration = {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 8080,
};

const mode = (process.env.NODE_ENV as 'production' | 'development' | undefined) ?? 'development';

const config: Configuration = {
    mode,
    entry: path.resolve(__dirname, '/src/index.tsx'),
    module: {
        rules: [
            {
                test: /.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            },
                            importLoaders: 1,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[id].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        asyncChunks: true,
        chunkFilename: '[id].js',
        cssHeadDataCompression: mode === 'production',
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: mode === 'production',
            inject: true,
            template: './public/index.html',
        }),
    ],
    devServer,
};

export default config;
