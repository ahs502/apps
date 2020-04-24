const path = require('path');
const { override, removeModuleScopePlugin, babelInclude, addBabelPlugins, addWebpackModuleRule } = require('customize-cra');

module.exports = {
  webpack: override(
    addBabelPlugins('@babel/plugin-proposal-optional-chaining', '@babel/plugin-proposal-nullish-coalescing-operator'),
    removeModuleScopePlugin(),
    babelInclude([path.resolve('src'), path.resolve('../core')]),
    addWebpackModuleRule({ test: /\.md$/, use: 'raw-loader' })
  )
};
