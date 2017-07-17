import webpack from 'webpack';
import path from 'path';

module.exports = {
    entry: 'index.js',
    output:{
        path: path.resolve(__dirname, "dist"),
        fileName: 'bundle.js',
        filePath: '/'
    }
};