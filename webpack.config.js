const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        devtool: isProduction ? false : 'eval-source-map',
        entry: './src/index.tsx',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                    include: [ path.resolve(__dirname, 'src') ]
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js']
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'build')
        },
        plugins: [
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: ['build'],
            }),
            new HtmlWebpackPlugin({
                hash: true,
                title: isProduction ? 'Production' : 'Development',
                template: './src/index.html',
                filename: './index.html'
            })
        ]
    }
};