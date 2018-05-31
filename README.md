# React Router 4.x Dynamic Import and Common Chunk Optimize
> search `damujiangr:` for attention

## Usage
1. import `antd` and dynamic import, plugins: [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) / [babel-plugin-syntax-dynamic-import](https://github.com/babel/babel/tree/master/packages/babel-plugin-syntax-dynamic-import)

```
// .babelrc or babel-loader option
"plugins": [
      [
        "import",
        {
          "libraryName": "antd",
          "libraryDirectory": "es",
          "style": "css"
        }
      ],
      "syntax-dynamic-import"
    ]
```
1. dynamic import for react router, [react-loadable](https://github.com/jamiebuilds/react-loadable)

```
const Home = Loadable({
    loader: () => import('./App'),
    loading: Loading
 });

 <Route exact path="/" component={Home} />
```

1. common chunk
```
// damujiangr: common chunk
new webpack.optimize.CommonsChunkPlugin({
    children: true,// If `true` all children of the commons chunk are selected
    minChunks: 2,// The number must be greater than or equal 2 and lower than or equal to the number of chunks.
}),
```

1. externals

```
// damujiangr: externals
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  }
```

1. bundle analysis, plugins: [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)
```
// damujiangr: require
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// damujiangr: bundle analyer
new BundleAnalyzerPlugin(),
```

## TODO 
1. split css that not been used in home page
