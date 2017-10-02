'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    module: {
  //      preLoaders: [
    //        { exclude: '/node_modules/', loader: 'tslint', test: /\.ts$/ }
      // ],
        loaders: [
            { loader: 'raw-loader', test: /\.(css|html)$/ },
            { exclude: /node_modules/, loader: 'ts-loader', test: /\.ts$/ }
        ]
    },
    resolve: {
        extensions: [ '.js', '.ts']
       // modulesDirectories: ['./node_modules'],
      // root: path.resolve('.', 'src')
    }
   // tslint: {
     //   emitErrors: true
   // }
};
