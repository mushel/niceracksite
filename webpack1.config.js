module.exports = {
	entry: './app.scss',
    output: {
    // This is necessary for webpack to compile,
    // but we never use style-bundle.js.
    filename: 'style-bundle.js',
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        }]
    }
};