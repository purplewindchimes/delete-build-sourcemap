# delete-build-sourcemap

delete source map files after uploaded to sentry or anywhere

## 安装

```bash
npm i delete-build-sourcemap
```

## 使用

```javascript
// webpack.config.js
const DeleteSourceMap = require('delete-build-sourcemap')

module.exports = {
    // ...
    plugins: [
        new DeleteSourceMap()
    ],
    // ...
}
```
