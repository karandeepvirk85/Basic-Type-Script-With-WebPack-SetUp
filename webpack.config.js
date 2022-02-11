const path = require('path');

module.exports = {
    mode: 'none',
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.css']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css?$/,
                use: 'css-loader'
            }
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    }
}