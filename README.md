# React Router 4.x Dynamic Import and Common Chunk Optimize
> search `damujiangr:` for details

related: [damujiangr/preact-router-dynamic-optimize](https://github.com/damujiangr/preact-router-dynamic-optimize)

## Usage
1. command:
```bash
npm start       // start app
npm run build   // build and analysis
```

1. import `antd` and dynamic import, plugins: [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) / [babel-plugin-syntax-dynamic-import](https://github.com/babel/babel/tree/master/packages/babel-plugin-syntax-dynamic-import)

```javascript
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

```javascript
const Home = Loadable({
    loader: () => import('./App'),
    loading: Loading
 });

 <Route exact path="/" component={Home} />
```

1. common chunk
```javascript
// damujiangr: common chunk
new webpack.optimize.CommonsChunkPlugin({
    name: "vendor",
    minChunks: Infinity,// (with more entries, this ensures that no other module goes into the vendor chunk)
}),
new webpack.optimize.CommonsChunkPlugin({
    children: true,// If `true` all children of the commons chunk are selected
    minChunks: 2,// The number must be greater than or equal 2 and lower than or equal to the number of chunks.
}),
```

1. externals, a substitution of vendor, not neccesary
> priority if you have multi page in separate project for reuse

```javascript
// damujiangr: externals
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  }
```

1. bundle analysis, plugins: [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)
```javascript
// damujiangr: require
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// damujiangr: bundle analyer
new BundleAnalyzerPlugin(),
```

## TODO 
1. split css that not been used in home page
